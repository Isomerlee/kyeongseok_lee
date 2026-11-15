import React from 'react';
import { getCv } from '../content';
import { useLang } from '../i18n';

const iconLinkStyle = { color: 'inherit', display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', transition: 'opacity 0.2s ease' };
const dim = (e) => { e.currentTarget.style.opacity = '0.6'; };
const undim = (e) => { e.currentTarget.style.opacity = '1'; };

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// 내용은 content/cv/cv.yaml 에서 고친다.
const Profile = () => {
  const { lang, t } = useLang();
  const cv = getCv(lang);
  const socials = [
    cv.instagram && { href: cv.instagram, label: 'Instagram', Icon: InstagramIcon },
    cv.linkedin && { href: cv.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  ].filter(Boolean);
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-name">{cv.name}</h1>
        <div className="profile-contact">
          {[cv.email, cv.phone].filter(Boolean).join(' | ')}
          {socials.length > 0 && (
            <>
              {' '}
              <span style={{ margin: '0 0.4rem' }}>|</span>
              <span style={{ display: 'inline-flex', gap: '0.6rem', verticalAlign: 'middle' }}>
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} style={iconLinkStyle} onMouseEnter={dim} onMouseLeave={undim}>
                    <Icon />
                  </a>
                ))}
              </span>
            </>
          )}
        </div>
        {cv.portfolio_pdf && (
          <div style={{ marginTop: '1.2rem' }}>
            <a href={`${import.meta.env.BASE_URL}${cv.portfolio_pdf}`} download="Kyeongseok_Lee_Portfolio.pdf" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.8rem',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: '400',
              color: 'var(--text-color)',
              backgroundColor: 'var(--bg-color)',
              transition: 'background-color 0.2s ease, border-color 0.2s ease',
              textDecoration: 'none'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
              e.currentTarget.style.borderColor = 'var(--secondary-text)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-color)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}>
              <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              {t('portfolio')}
            </a>
          </div>
        )}
      </div>

      <div className="profile-content">
        {(cv.sections || []).map((section) => (
          <section className="cv-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.text && <p>{section.text}</p>}
            {(section.items || []).map((item, i) => (
              <div className="cv-item" key={i}>
                <div className="cv-item-header">
                  <span className="cv-item-title">{item.title}</span>
                  {item.date && <span className="cv-item-date">{String(item.date)}</span>}
                </div>
                {item.role && <p className="cv-item-role">{item.role}</p>}
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Profile;
