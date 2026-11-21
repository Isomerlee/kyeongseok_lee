import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getTimeline } from '../content';
import { useLang } from '../i18n';

// All Work — 세로 연표 (index.css "All Work 연표", 11/22)
// - 가운데 세로선이 시간 축. 위가 최신, 아래로 갈수록 예전 작업. 해가 바뀌는 자리에 연도 표시
// - 선 왼쪽 = 첫 번째 카테고리(Design Work), 오른쪽 = 두 번째(Planning Work) — category.yaml 의 order
// - 마우스를 올리면 사진 바깥쪽 옆으로 기간 · 제목이 나오고, 나머지 사진은 흐려진다 (설명은 잘려서 뺌, 11/22)
//   누르면 바로 프로젝트로 간다. 마우스가 없거나 화면이 좁으면 사진 아래에 기간 · 제목이 늘 보인다
const WorkTimeline = () => {
  const { lang } = useLang();
  const categories = getCategories(lang);
  const leftCategory = categories[0];
  const rightCategory = categories[1];
  const projects = getTimeline(lang);

  // 연표 항목 만들기: 해가 바뀔 때 연도를 끼우고, 왼쪽 · 오른쪽이 번갈아 나오면 위아래로 살짝 겹쳐 지그재그로
  const entries = [];
  let lastYear = null;
  let lastSide = null;
  projects.forEach((project) => {
    const year = project.date.slice(0, 4);
    if (year !== lastYear) {
      entries.push({ type: 'year', year });
      lastYear = year;
      lastSide = null;
    }
    const side = project.category === leftCategory?.key ? 'left' : 'right';
    entries.push({ type: 'item', project, side, tuck: lastSide !== null && lastSide !== side });
    lastSide = side;
  });

  return (
    <div className="work-timeline">
      <div className="timeline-head" aria-hidden="true">
        <span className="timeline-label timeline-label--left">{leftCategory?.nav}</span>
        <span />
        <span className="timeline-label timeline-label--right">{rightCategory?.nav}</span>
      </div>

      <ol className="timeline-track">
        {entries.map((entry) => {
          if (entry.type === 'year') {
            return (
              <li key={`year-${entry.year}`} className="timeline-year" aria-hidden="true">
                <span>{entry.year}</span>
              </li>
            );
          }
          const { project, side, tuck } = entry;
          return (
            <li
              key={project.id}
              className={`timeline-item timeline-item--${side}${tuck ? ' timeline-item--tuck' : ''}`}
            >
              <Link to={`/project/${project.id}`} className="timeline-card">
                {/* 사진 칸: 선 · 점 · 옆 설명이 이 칸의 세로 가운데(50%)에 맞춰진다 */}
                <span className="timeline-media">
                  <span className="timeline-thumb">
                    {project.thumbnailSrc ? (
                      <img
                        src={project.thumbnailSrc}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: project.thumbnailPosition }}
                      />
                    ) : (
                      <span className="timeline-thumb-empty">{project.title}</span>
                    )}
                  </span>
                  <span className="timeline-stem" aria-hidden="true">
                    <span className="timeline-dot" />
                  </span>
                </span>
                <span className="timeline-caption">
                  <span className="timeline-period">{project.period}</span>
                  <span className="timeline-title">{project.title}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default WorkTimeline;
