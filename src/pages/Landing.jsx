import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import { getCv, getTimeline } from '../content';

// 첫 페이지: 화면 세로 가운데에 프로젝트 썸네일 한 줄이 왼쪽으로 천천히 흐른다 (11/22 사용자 결정 — 전엔 이름만,
//   여러 줄도 만들어 봤다가 한 줄로, 큰 이름도 뺌)
// - 마우스를 올리면 줄이 멈추고, 올린 사진에 기간 · 제목, 나머지는 흐려짐
// - 누르면 그 프로젝트로. 사진은 각 프로젝트 썸네일 (목록에서 숨긴 프로젝트는 빠짐)
// - 기기의 "움직임 줄이기" 설정이면 흐르지 않음 (index.css "첫 페이지")
// 이름은 content/cv/cv.yaml 의 landing_name (없으면 name)

// 줄 하나 = 사진 묶음을 두 번 이어 붙이고 묶음 하나 길이만큼(-50%) 옮기기를 반복 → 끊김 없이 흐름
const MarqueeRow = ({ items, secondsPerItem }) => {
  const style = { '--landing-duration': `${items.length * secondsPerItem}s` };
  return (
    <div className="landing-row">
      <div className="landing-track" style={style}>
        {[0, 1].map((copy) =>
          items.map((project, i) => (
            <Link
              key={`${copy}-${i}`}
              to={`/project/${project.id}`}
              className="landing-item"
              aria-hidden={copy === 1 ? 'true' : undefined}
              tabIndex={copy === 1 ? -1 : undefined}
            >
              <img
                src={project.thumbnailSrc}
                alt=""
                decoding="async"
                style={{ objectPosition: project.thumbnailPosition }}
              />
              <span className="landing-caption">
                <span className="landing-caption-period">{project.period}</span>
                <span className="landing-caption-title">{project.title}</span>
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

const Landing = () => {
  const { lang } = useLang();
  const cv = getCv(lang);

  // 첫 페이지에 있는 동안만 스크롤 막기 (index.css html.is-landing)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('is-landing');
    return () => root.classList.remove('is-landing');
  }, []);

  // 사진이 적으면 화면 폭을 못 채우니 6장 이상이 되도록 반복
  const base = getTimeline(lang).filter((p) => p.thumbnailSrc);
  let set = base;
  while (set.length > 0 && set.length < 6) set = set.concat(base);
  const name = cv.landing_name || cv.name;

  return (
    <section className="landing">
      {/* 큰 이름은 화면에서 뺌 (11/22 사용자 결정, 상단 바에 이름 있음). 읽기 프로그램용으로만 남김 */}
      <h1 className="visually-hidden">{name}</h1>
      {set.length > 0 && <MarqueeRow items={set} secondsPerItem={16} />}
    </section>
  );
};

export default Landing;
