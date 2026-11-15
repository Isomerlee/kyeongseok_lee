import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

// 라이트 / 다크 테마. 처음 값은 index.html 의 인라인 스크립트가 화면 그리기 전에 정한다
// (지난번 선택 → 없으면 기기 설정). 여기서는 전환과 저장만 한다.
const STORAGE_KEY = 'theme';

const current = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

const readSaved = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

export const useTheme = () => {
  const [theme, setThemeState] = useState(current);

  // 직접 고른 적이 없으면 기기 설정이 바뀔 때 따라간다
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (readSaved()) return;
      const next = e.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      setThemeState(next);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.dataset.theme = next;
      flushSync(() => setThemeState(next)); // 아이콘까지 새 화면에 같이 담기게
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // 저장이 막혀 있어도 전환은 동작
    }

    // 부드러운 전환: 지원 브라우저는 화면 전체를 살짝 크로스페이드 (index.css 의 ::view-transition)
    // 미지원 브라우저는 색만 잠깐 transition. 움직임 줄이기 설정이면 바로 바꾼다
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return apply();
    if (document.startViewTransition) {
      document.startViewTransition(apply);
      return undefined;
    }
    const root = document.documentElement;
    root.classList.add('theme-fading');
    apply();
    window.setTimeout(() => root.classList.remove('theme-fading'), 400);
    return undefined;
  };

  return { theme, toggleTheme };
};
