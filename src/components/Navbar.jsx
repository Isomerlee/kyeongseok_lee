import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang, LANGS } from '../i18n';
import { useTheme } from '../theme';
import { getCategories, getProject } from '../content';

// 레퍼런스: seoyeong-hwang.com 상단 바
// 왼쪽 이름 · 가운데 메뉴 · 오른쪽 EN / KO | 테마 전환 / 모바일은 햄버거 메뉴

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

// 메뉴: 전체 / 카테고리들(디자인 · 기획) / 프로필
// 카테고리 메뉴 이름은 content/projects/<카테고리>/category.yaml 의 nav 값
const useActiveKey = (lang) => {
  const location = useLocation();
  if (location.pathname.startsWith('/profile')) return 'profile';
  const projectMatch = location.pathname.match(/^\/project\/([^/]+)/);
  if (projectMatch) return getProject(projectMatch[1], lang)?.category || null;
  if (location.pathname === '/projects') return new URLSearchParams(location.search).get('filter') || 'all';
  return null; // 첫 페이지(/)에서는 아무 메뉴도 활성 아님
};

const NavLinks = ({ t, lang }) => {
  const active = useActiveKey(lang);
  const items = [
    { key: 'all', to: '/projects', label: t('all') },
    ...getCategories(lang).map((c) => ({ key: c.key, to: `/projects?filter=${c.key}`, label: c.nav })),
    { key: 'profile', to: '/profile', label: t('profile') },
  ];
  return items.map((item) => (
    <Link
      key={item.key}
      to={item.to}
      className={item.key === active ? 'nav-link active' : 'nav-link'}
      aria-current={item.key === active ? 'page' : undefined}
    >
      {item.label}
    </Link>
  ));
};

const Controls = ({ lang, setLang, theme, toggleTheme, t }) => (
  <div className="nav-controls">
    <div className="lang-toggle" role="group" aria-label="Language">
      {LANGS.map((code, i) => (
        <React.Fragment key={code}>
          {i > 0 && <span className="lang-sep">/</span>}
          <button
            type="button"
            className={code === lang ? 'lang-btn active' : 'lang-btn'}
            aria-pressed={code === lang}
            onClick={() => setLang(code)}
          >
            {code.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
    <span className="nav-divider" aria-hidden="true" />
    <button
      type="button"
      className="icon-btn"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
      title={theme === 'dark' ? t('lightMode') : t('darkMode')}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  </div>
);

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 페이지를 옮기면 모바일 메뉴 닫기
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  // Esc 로 닫기
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const controls = { lang, setLang, theme, toggleTheme, t };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-brand">
          <NavLink to="/">{lang === 'ko' ? '이경석' : 'Kyeongseok Lee'}</NavLink>
        </div>

        <nav className="nav-center" aria-label="Main">
          <NavLinks t={t} lang={lang} />
        </nav>

        <div className="nav-right">
          <Controls {...controls} />
        </div>

        <button
          type="button"
          className="icon-btn nav-menu-btn"
          aria-label={t('menu')}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="mobile-menu-links" aria-label="Main">
            <NavLinks t={t} lang={lang} />
          </nav>
          <Controls {...controls} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
