// 사이트 이미지 가볍게 만들기: npm run images
//
// content/projects/<카테고리>/<id>/images/ 안의 사진을
//   - 긴 변 최대 2400px (화면 최대 1200px × 레티나 2배)
//   - WebP (품질 82) 로 바꾼다. 파일 이름(확장자 뺀 부분)은 그대로라 yaml · 코드는 안 고쳐도 된다.
// 원본은 지우지 않고 PROJ_Archive/98_Source/Website_Originals/<카테고리>/<id>/ 로 옮긴다.
// 이미 가벼운 파일(WebP, 2400px 이하, 800KB 이하)은 건너뛴다. 새 사진을 넣은 뒤 다시 돌리면 새 것만 바뀐다.
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('content/projects');
const BACKUP = path.resolve(process.argv[2] || '../../98_Source/Website_Originals');
const MAX = 2400;
const QUALITY = 82;
const SMALL = 800 * 1024;
const EXT = /\.(jpe?g|png|webp)$/i;

const mb = (n) => `${(n / 1048576).toFixed(1)}MB`;

const moveFile = async (from, to) => {
  await fs.mkdir(path.dirname(to), { recursive: true });
  try {
    await fs.rename(from, to);
  } catch {
    await fs.copyFile(from, to);
    await fs.unlink(from);
  }
};

const files = [];
for (const category of await fs.readdir(ROOT)) {
  const catDir = path.join(ROOT, category);
  if (!(await fs.stat(catDir)).isDirectory()) continue;
  for (const id of await fs.readdir(catDir)) {
    const imgDir = path.join(catDir, id, 'images');
    try {
      for (const name of await fs.readdir(imgDir)) {
        if (EXT.test(name)) files.push({ category, id, dir: imgDir, name });
      }
    } catch {
      // images 폴더 없음
    }
  }
}

let before = 0;
let after = 0;
let changed = 0;
for (const { category, id, dir, name } of files) {
  const file = path.join(dir, name);
  const size = (await fs.stat(file)).size;
  const isWebp = /\.webp$/i.test(name);
  const meta = await sharp(file).metadata();
  const longEdge = Math.max(meta.width || 0, meta.height || 0);
  if (isWebp && longEdge <= MAX && size <= SMALL) continue;

  const out = path.join(dir, name.replace(EXT, '.webp'));
  if (!isWebp) {
    try {
      await fs.access(out);
      console.warn(`skip (같은 이름 webp 있음): ${category}/${id}/${name}`);
      continue;
    } catch {
      // 없음 → 진행
    }
  }

  const buffer = await sharp(file, { limitInputPixels: false })
    .rotate() // 사진 회전 정보(EXIF) 반영
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer();
  if (isWebp && buffer.length >= size) continue;

  await moveFile(file, path.join(BACKUP, category, id, name));
  await fs.writeFile(out, buffer);
  before += size;
  after += buffer.length;
  changed += 1;
  console.log(`${category}/${id}/${name}  ${mb(size)} → ${mb(buffer.length)}`);
}

console.log(`\n${changed}개 변환: ${mb(before)} → ${mb(after)} (원본: ${BACKUP})`);
