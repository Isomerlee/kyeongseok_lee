// content/ 폴더(cv, projects)를 읽어서 사이트에서 쓰는 데이터로 바꾼다.
// 내용을 고칠 때는 이 파일이 아니라 content/ 안의 yaml · 이미지를 고치면 된다.
// 한국어: 각 yaml 의 ko: 아래 값이 한국어 화면에서 같은 이름의 값을 대신한다 (없으면 영문 그대로).
import { parse } from 'yaml';
import cvRaw from '../content/cv/cv.yaml?raw';

// 경로 구조: /content/projects/<카테고리>/<프로젝트-id>/...
const categoryFiles = import.meta.glob('/content/projects/*/category.yaml', {
  eager: true,
  query: '?raw',
  import: 'default',
});
const projectFiles = import.meta.glob('/content/projects/*/*/project.yaml', {
  eager: true,
  query: '?raw',
  import: 'default',
});
const imageFiles = import.meta.glob('/content/projects/*/*/images/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
});
const attachmentFiles = import.meta.glob('/content/projects/*/*/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
});

const categoryFromPath = (path) => path.split('/')[3];
const idFromPath = (path) => path.split('/')[4];
const fileName = (path) => path.split('/').pop();
const baseName = (path) => fileName(path).replace(/\.[^.]+$/, '');

// 영문 값 위에 ko: 값을 덮어쓴다
const localize = (data, lang) => {
  const { ko, ...base } = data || {};
  return lang === 'ko' && ko ? { ...base, ...ko } : base;
};

const imagesOf = (id) =>
  Object.keys(imageFiles)
    .filter((path) => idFromPath(path) === id)
    .map((path) => ({ name: baseName(path), src: imageFiles[path] }));

// "final" → final1, final2, ... 순서대로
const galleryImages = (images, prefix) =>
  images
    .map((img) => ({ ...img, num: img.name.match(new RegExp(`^${prefix}(\\d+)$`))?.[1] }))
    .filter((img) => img.num !== undefined)
    .sort((a, b) => Number(a.num) - Number(b.num))
    .map(({ name, src }) => ({ src, alt: name }));

const buildProject = (path, lang) => {
  const id = idFromPath(path);
  const category = categoryFromPath(path);
  const data = localize(parse(projectFiles[path]), lang);
  const images = imagesOf(id);
  const thumbnail = images.find((img) => img.name === `${id}_thumbnail` || img.name === 'thumbnail');

  const attachments = {};
  Object.keys(attachmentFiles)
    .filter((p) => idFromPath(p) === id)
    .forEach((p) => {
      attachments[fileName(p)] = attachmentFiles[p];
    });

  const blocks = (data.blocks || []).map((block) => {
    if (block.gallery) {
      return { ...block, type: 'gallery', images: galleryImages(images, block.gallery) };
    }
    if (block.media) {
      return {
        type: 'media',
        items: block.media.map((item) => ({
          ...item,
          url: item.file ? attachments[item.file] : undefined,
          thumbnailSrc: item.thumbnail ? images.find((img) => img.name === item.thumbnail)?.src : undefined,
        })),
      };
    }
    if (block.video) return { type: 'video', id: block.video };
    if (block.videos) return { type: 'videos', ids: block.videos };
    if (block.video_groups) return { type: 'video_groups', groups: block.video_groups };
    if (block.credit) return { type: 'credit', lines: block.credit };
    return { type: 'unknown', raw: block };
  });

  return {
    id,
    category,
    dir: `content/projects/${category}/${id}`,
    title: data.title || id,
    subtitle: data.subtitle || '',
    year: data.year != null ? String(data.year) : '',
    date: data.date ? String(data.date) : String(data.year || ''),
    period: makePeriod(data, lang),
    tags: (data.tags || []).map(String),
    order: data.order ?? 999,
    hidden: Boolean(data.hidden),
    heroText: data.hero_text || 'Main Project Image',
    thumbnailSrc: thumbnail?.src || null,
    thumbnailPosition: data.thumbnail_position || 'center',
    meta: data.meta || {},
    description: data.description ? String(data.description).trim() : '',
    summary: makeSummary(data),
    hoverColor: data.hover_color || null,
    blocks,
  };
};

// 카드 위 기간: '2026-06' → 2026.06, start 가 있으면 "2026.06 – 2026.11", ongoing 이면 "2026.09 – Present"
const monthLabel = (value) => String(value).replace('-', '.');
function makePeriod(data, lang) {
  const end = data.date ? String(data.date) : String(data.year || '');
  const endLabel = data.ongoing ? (lang === 'ko' ? '현재' : 'Present') : monthLabel(end);
  if (data.start && (data.ongoing || String(data.start) !== end)) return `${monthLabel(data.start)} – ${endLabel}`;
  return endLabel;
}

// 썸네일에 마우스를 올렸을 때 보이는 설명: summary 가 있으면 그것, 없으면 설명 첫 문단, 그것도 없으면 부제
function makeSummary(data) {
  if (data.summary) return String(data.summary).trim();
  if (data.description) {
    const first = String(data.description).trim().split(/\n\s*\n/)[0];
    return first.replace(/\*\*/g, '').replace(/\s*\n\s*/g, ' ').trim();
  }
  return data.subtitle || '';
}

const buildAll = (lang) => {
  const projects = Object.keys(projectFiles)
    .map((path) => buildProject(path, lang))
    .sort((a, b) => a.order - b.order);
  const visible = projects.filter((p) => !p.hidden);

  // 메인 화면 섹션: 카테고리 폴더마다 하나 (category.yaml 의 title, order)
  const categories = Object.keys(categoryFiles)
    .map((path) => {
      const key = categoryFromPath(path);
      const data = localize(parse(categoryFiles[path]), lang);
      return {
        key,
        title: data.title || key,
        nav: data.nav || data.title || key,
        order: data.order ?? 999,
        projects: visible.filter((p) => p.category === key),
      };
    })
    .filter((c) => c.projects.length > 0)
    .sort((a, b) => a.order - b.order);

  // All Work: 카테고리 섞어서 최신순 (date 내림차순 → 같은 달이면 카테고리 순서 → order)
  const categoryOrder = Object.fromEntries(categories.map((c) => [c.key, c.order]));
  const categoryTitle = Object.fromEntries(categories.map((c) => [c.key, c.title]));
  const timeline = visible
    .map((p) => ({ ...p, categoryTitle: categoryTitle[p.category] || p.category }))
    .sort(
      (a, b) =>
        b.date.localeCompare(a.date) ||
        (categoryOrder[a.category] ?? 999) - (categoryOrder[b.category] ?? 999) ||
        a.order - b.order
    );

  return { projects, categories, timeline, cv: localize(parse(cvRaw), lang) };
};

const byLang = { en: buildAll('en'), ko: buildAll('ko') };
const pick = (lang) => byLang[lang] || byLang.en;

export const getCategories = (lang) => pick(lang).categories;
export const getTimeline = (lang) => pick(lang).timeline;
export const getProject = (id, lang) => pick(lang).projects.find((p) => p.id === id);
export const getCv = (lang) => pick(lang).cv;
