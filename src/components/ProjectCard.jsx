import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Placeholder from './Placeholder';

// 마우스를 올리면 카드 전체가 썸네일 색으로 덮이고 설명이 뜬다 (레퍼런스: seoyeong-hwang.com/projects)
// 색은 project.yaml 의 hover_color, 없으면 썸네일 평균색을 자동으로 뽑는다.

const colorCache = new Map();

const pickTextColor = ([r, g, b]) => {
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? '#17191d' : '#ffffff';
};

const averageColor = (src) =>
  new Promise((resolve) => {
    if (colorCache.has(src)) return resolve(colorCache.get(src));
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      try {
        const size = 24;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);
        let r = 0, g = 0, b = 0;
        const n = data.length / 4;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }
        const rgb = [Math.round(r / n), Math.round(g / n), Math.round(b / n)];
        colorCache.set(src, rgb);
        resolve(rgb);
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });

// 카드 글: 기간(2026.06 – 2026.11) / 제목 / 태그 줄 (레퍼런스처럼 제목 아래)
// 태그 줄 = project.yaml tags (Research · Course Project · Performance …). 카테고리 이름은 쓰지 않는다
// dense: All Work 의 작은 카드 (6열)
const ProjectCard = ({ project, dense = false }) => {
  const [fill, setFill] = useState(null);

  useEffect(() => {
    let alive = true;
    if (project.hoverColor) {
      setFill({ bg: project.hoverColor, text: null });
      return undefined;
    }
    if (!project.thumbnailSrc) return undefined;
    averageColor(project.thumbnailSrc).then((rgb) => {
      if (alive && rgb) setFill({ bg: `rgb(${rgb.join(', ')})`, text: pickTextColor(rgb) });
    });
    return () => {
      alive = false;
    };
  }, [project.hoverColor, project.thumbnailSrc]);

  const style = fill
    ? { '--card-hover-fill': fill.bg, ...(fill.text ? { '--card-hover-text': fill.text } : {}) }
    : undefined;

  return (
    <Link to={`/project/${project.id}`} className={dense ? 'project-card project-card--dense' : 'project-card'} style={style}>
      {project.thumbnailSrc ? (
        <div className="project-thumbnail">
          <img src={project.thumbnailSrc} alt={`${project.title} thumbnail`} loading="lazy" decoding="async" style={{ objectPosition: project.thumbnailPosition }} />
        </div>
      ) : (
        <Placeholder type="card" text={dense ? '' : 'Project Thumbnail'} filename={dense ? undefined : `${project.id}_thumbnail`} />
      )}
      <div className="project-card-content">
        {project.period && <span className="project-card-year">{project.period}</span>}
        <h3 className="project-card-title">{project.title}</h3>
        {project.tags.length > 0 && (
          <p className="project-card-tags">
            {project.tags.map((tag, i) => (
              <React.Fragment key={tag}>
                {i > 0 && <span className="project-card-tags__dot" aria-hidden="true">·</span>}
                <span>{tag}</span>
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
      {project.summary && (
        <div className="card-hover-summary" aria-hidden="true">
          <div className="card-hover-summary__content">
            <p>{project.summary}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default ProjectCard;
