import React from 'react';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-name">KYEONGSEOK LEE</h1>
        <div className="profile-contact">
          lks020305@gmail.com | 82+ 1072593050 <span style={{ margin: '0 0.4rem' }}>|</span>
          <a href="https://www.instagram.com/isomerlee/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <div style={{ marginTop: '1.2rem' }}>
          <a href={`${import.meta.env.BASE_URL}portfolio.pdf`} download="Kyeongseok_Lee_Portfolio.pdf" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.8rem',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: '500',
            color: 'var(--text-color)',
            backgroundColor: 'var(--bg-color)',
            transition: 'background-color 0.2s ease, border-color 0.2s ease',
            textDecoration: 'none'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--hover-bg)';
            e.currentTarget.style.borderColor = '#ccc';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-color)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}>
            <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Portfolio
          </a>
        </div>
      </div>

      <div className="profile-content">
        <section className="cv-section">
          <h2>RESEARCH TOPICS</h2>
          <p>Computational Interactive Art, Data Visualization, HCI in Creative Expression</p>
        </section>

        <section className="cv-section">
          <h2>EDUCATION</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">UNIST (Ulsan National Institute of Science and Technology), Ulsan, Korea</span>
              <span className="cv-item-date">Mar 2021 – Feb 2027 (Expected)</span>
            </div>
            <p className="cv-item-role">B.S. in Design</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>WORK EXPERIENCE</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">Expressive Computing Lab, UNIST, Korea</span>
              <span className="cv-item-date">Dec 2022 – Apr 2023, Jul 2025 – Present</span>
            </div>
            <p className="cv-item-role">Undergraduate Intern</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">OND Lab, UNIST, Korea</span>
              <span className="cv-item-date">Mar 2022 – Nov 2022</span>
            </div>
            <p className="cv-item-role">Part-time Designer</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>AWARDS</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">2024 Defense Open Data Application Competition</span>
              <span className="cv-item-date">2024</span>
            </div>
            <p className="cv-item-role">Excellence Award in Idea Planning (2nd Place)</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">The 10th ROK Army Startup Competition</span>
              <span className="cv-item-date">2023</span>
            </div>
            <p className="cv-item-role">Creativity Awards</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>LEADERSHIP</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">UNIST Design Department Student President</span>
              <span className="cv-item-date">Jan 2026 – Present</span>
            </div>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">UNIST Student Council Design-Information Team</span>
              <span className="cv-item-date">2022</span>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>PERFORMANCES</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">표류 (drift)</span>
              <span className="cv-item-date">Nov 2025</span>
            </div>
            <p className="cv-item-role">Visual Director, Lead Designer</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">Industrial City</span>
              <span className="cv-item-date">Nov 2024, Jan 2025</span>
            </div>
            <p className="cv-item-role">DJ, Visual Director</p>
          </div>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">Sauce Radio</span>
              <span className="cv-item-date">2024 - 2025</span>
            </div>
            <p className="cv-item-role">DJ, Visual Director</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>LOCAL EVENT</h2>
          <div className="cv-item">
            <div className="cv-item-header">
              <span className="cv-item-title">HURURUK Party</span>
              <span className="cv-item-date">May 2025</span>
            </div>
            <p className="cv-item-role">Project Director, Lead Designer, Music Director</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
