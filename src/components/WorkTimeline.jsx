import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getTimeline } from '../content';
import { useLang } from '../i18n';

// All Work — 세로 연표 (index.css "All Work 연표", 11/22)
// - 가운데 세로선이 시간 축. 위가 최신, 아래로 갈수록 예전 작업. 해가 바뀌는 자리에 연도 표시
// - 선 왼쪽 = 첫 번째 카테고리(Design Work), 오른쪽 = 두 번째(Planning Work) — category.yaml 의 order
// - 마우스를 올리면 사진 바깥쪽 옆으로 기간 · 제목이 나오고, 나머지 사진은 흐려진다 (설명은 잘려서 뺌, 11/22)
//   누르면 바로 프로젝트로 간다. 마우스가 없거나 화면이 좁으면 사진 아래에 기간 · 제목이 늘 보인다
// - 넓은 화면(마우스 + 1280px 이상)은 워크마다 2열 지그재그 (11/22 사용자 요청): 축 위 점 간격은 모두 같게,
//   열은 축 가까운 열 · 바깥 열 중 부딪히지 않는 쪽 (아래 place2col). 그보다 좁으면 워크마다 1열 (index.css "2열 지그재그")

// 2열 배치 계산 — 단위는 사진 높이(H)
// 축 위 점 간격은 모두 STEP 으로 같다 (11/22 사용자 결정: 촘촘하되 간격은 일정하게).
// STEP = 0.5 + GAP 이 같은 간격으로 2열에 넣을 수 있는 가장 촘촘한 값이다: 같은 쪽 항목이 연달아 나오면
// 두 열을 번갈아 써야 하고, 이때 바깥 열 사진의 가로선(사진 세로 가운데)이 축 가까운 열 사진 사이 틈(GAP)으로 지나간다.
// 열 고르기: 같은 열 앞 사진과 GAP 이상 떨어지고, 바깥 열 가로선이 축 가까운 열 사진을 가로지르지 않는 열.
// 두 열 다 되면 같은 쪽 앞 항목과 다른 열 (지그재그)
const GAP = 0.07;
const STEP = 0.5 + GAP;
const newYearState = () => ({
  prevTop: null,
  left: { innerBottom: -Infinity, outerBottom: -Infinity, outerStem: -Infinity, lastOuter: null },
  right: { innerBottom: -Infinity, outerBottom: -Infinity, outerStem: -Infinity, lastOuter: null },
});
const EPS = 1e-6;
const place2col = (state, side) => {
  const s = state[side];
  const top = state.prevTop === null ? 0 : state.prevTop + STEP;
  const innerOk = top + EPS >= s.innerBottom + GAP && top + EPS >= s.outerStem + GAP;
  const outerOk = top + EPS >= s.outerBottom + GAP && top + 0.5 + EPS >= s.innerBottom + GAP;
  const outer = innerOk && outerOk ? s.lastOuter === false : outerOk;
  if (outer) {
    s.outerBottom = top + 1;
    s.outerStem = top + 0.5;
  } else {
    s.innerBottom = top + 1;
  }
  s.lastOuter = outer;
  state.prevTop = top;
  return outer;
};

const WorkTimeline = () => {
  const { lang } = useLang();
  const categories = getCategories(lang);
  const leftCategory = categories[0];
  const rightCategory = categories[1];
  const projects = getTimeline(lang);

  // 연표 항목 만들기: 해가 바뀔 때 연도를 끼운다
  // - tuck: 왼쪽 · 오른쪽이 번갈아 나오면 위아래로 살짝 겹침 (1열 화면)
  // - follow · outer: 2열 화면에서 그해 첫 항목이 아님(→ STEP 간격으로 올라붙음) · 바깥 열 (place2col)
  const entries = [];
  let lastYear = null;
  let lastSide = null;
  let layout = newYearState();
  projects.forEach((project) => {
    const year = project.date.slice(0, 4);
    if (year !== lastYear) {
      entries.push({ type: 'year', year });
      lastYear = year;
      lastSide = null;
      layout = newYearState();
    }
    const side = project.category === leftCategory?.key ? 'left' : 'right';
    const follow = lastSide !== null;
    const outer = place2col(layout, side);
    entries.push({ type: 'item', project, side, tuck: follow && lastSide !== side, follow, outer });
    lastSide = side;
  });

  return (
    // --tl-shift: 2열 화면에서 둘째 줄부터 앞 줄 아래 끝에서 올라붙는 정도 (사진 높이 단위, 음수) → 점 간격 = STEP
    <div className="work-timeline" style={{ '--tl-shift': String(STEP - 1) }}>
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
          const { project, side, tuck, follow, outer } = entry;
          const classes = [
            'timeline-item',
            `timeline-item--${side}`,
            tuck && 'timeline-item--tuck',
            follow && 'timeline-item--follow',
            outer && 'timeline-item--outer',
          ].filter(Boolean).join(' ');
          return (
            <li key={project.id} className={classes}>
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
