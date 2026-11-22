import React from 'react';
import { getCv } from '../content';
import { useLang } from '../i18n';

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

// 내용은 content/cv/cv.yaml 에서 고친다.
// 레이아웃 (index.css "Profile"):
//   데스크톱 — 맨 위 Contact 줄(메일 · 전화 · 링크 · 포트폴리오 PDF), 아래 섹션마다 [섹션 이름 | 이름 · 역할 · 설명 | 기간(오른쪽 정렬)] 3단
//   태블릿 — 섹션 이름이 위로 올라가고 [내용 | 기간] 2단 / 모바일 — 내용 아래에 기간이 쌓임 (11/22 기간을 내용 뒤로 옮김)
// 항목 값: title(필수) · date · role · desc(선택, 한 줄 설명)
const Profile = () => {
  const { lang, t } = useLang();
  const cv = getCv(lang);
  const links = [
    cv.instagram && { href: cv.instagram, label: 'Instagram' },
    cv.linkedin && { href: cv.linkedin, label: 'LinkedIn' },
  ].filter(Boolean);

  return (
    <div className="profile-page">
      {/* 이름은 상단 바 왼쪽에 이미 있어서 화면에는 안 보이게 (읽기 프로그램용으로만 남김, 11/22) */}
      <h1 className="visually-hidden">{cv.name}</h1>
      <section className="cv-section profile-contact-section">
        <h2 className="cv-section-title">{t('contact')}</h2>
        <div className="profile-contact">
          {cv.email && <a href={`mailto:${cv.email}`}>{cv.email}</a>}
          {cv.phone && <span>{cv.phone}</span>}
          {links.length > 0 && (
            <span className="profile-links">
              {links.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  {label} ↗
                </a>
              ))}
            </span>
          )}
          {cv.portfolio_pdf && (
            <a
              className="profile-download"
              href={`${import.meta.env.BASE_URL}${cv.portfolio_pdf}`}
              download="Kyeongseok_Lee_Portfolio.pdf"
            >
              <DownloadIcon />
              {t('portfolio')}
            </a>
          )}
        </div>
      </section>

      <div className="profile-content">
        {(cv.sections || []).map((section) => (
          <section className="cv-section" key={section.title}>
            <h2 className="cv-section-title">{section.title}</h2>
            <div className="cv-section-body">
              {section.text && <p className="cv-section-text">{section.text}</p>}
              {(section.items || []).map((item, i) => (
                <div className="cv-item" key={i}>
                  <div className="cv-item-main">
                    <span className="cv-item-title">{item.title}</span>
                    {item.role && <p className="cv-item-role">{item.role}</p>}
                    {item.desc && <p className="cv-item-desc">{item.desc}</p>}
                  </div>
                  <span className="cv-item-date">{item.date ? String(item.date) : ''}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Profile;
