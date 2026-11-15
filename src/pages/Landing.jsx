import React, { useEffect } from 'react';
import { useLang } from '../i18n';
import { getCv } from '../content';

// 첫 페이지: 지금은 이름만 화면 가운데. (나중에 반응형 아트 등을 넣을 자리)
// 이름은 content/cv/cv.yaml 의 landing_name (없으면 name)
const Landing = () => {
  const { lang } = useLang();
  const cv = getCv(lang);

  // 첫 페이지에 있는 동안만 스크롤 막기 (index.css html.is-landing)
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('is-landing');
    return () => root.classList.remove('is-landing');
  }, []);

  return (
    <section className="landing">
      <h1 className="landing-name">{cv.landing_name || cv.name}</h1>
    </section>
  );
};

export default Landing;
