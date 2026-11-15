import React, { createContext, useContext, useEffect, useState } from 'react';

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

  const setLang = (next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 저장이 막혀 있어도 전환은 동작
    }
  };

  const t = (key) => UI[lang][key] || UI.en[key] || key;

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);
