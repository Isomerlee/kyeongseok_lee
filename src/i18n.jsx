import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

// 화면 고정 문구 (메뉴 · 버튼). 글 내용은 content/ 의 yaml 에서 ko: 로 번역한다.
const UI = {
  en: {
    profile: 'Profile',
    projects: 'Projects',
    portfolio: 'Portfolio',
    clickToDownload: 'Click to download',
    notFound: 'Project not found',
    backToProjects: 'Back to projects',
    menu: 'Menu',
    all: 'All Work',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    contact: 'Contact',
  },
  ko: {
    profile: 'Profile',
    projects: '프로젝트',
    portfolio: '포트폴리오',
    clickToDownload: '클릭해서 다운로드',
    notFound: '프로젝트를 찾을 수 없어요',
    backToProjects: '프로젝트 목록으로',
    menu: '메뉴',
    all: 'All Work',
    darkMode: '다크 모드',
    lightMode: '라이트 모드',
    contact: '연락처',
  },
};

export const LANGS = ['en', 'ko'];
const STORAGE_KEY = 'lang';

// 우선순위: 주소의 ?lang=ko → 지난번 선택 → 영어
const readSaved = () => {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(saved) ? saved : 'en';
  } catch {
    return 'en';
  }
};

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: (key) => UI.en[key] || key });

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readSaved);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // 한/영 전환 애니메이션 (11/22): 지원 브라우저는 화면 전체를 블러 크로스페이드 (index.css "한/영 전환")
  // 미지원 브라우저는 새 화면만 블러에서 선명하게. 움직임 줄이기 설정이면 바로 바꾼다
  const setLang = (next) => {
    if (next === lang) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 저장이 막혀 있어도 전환은 동작
    }
    const root = document.documentElement;
    const apply = () => {
      root.lang = next; // :root[lang="ko"] 글자 규칙이 새 화면에 바로 반영되게
      flushSync(() => setLangState(next));
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply();
      return;
    }
    if (document.startViewTransition) {
      root.classList.add('lang-switching');
      const transition = document.startViewTransition(apply);
      transition.finished.finally(() => root.classList.remove('lang-switching'));
      return;
    }
    root.classList.add('lang-fading');
    apply();
    window.setTimeout(() => root.classList.remove('lang-fading'), 500);
  };

  const t = (key) => UI[lang][key] || UI.en[key] || key;

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);
