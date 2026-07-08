import React from 'react';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-name">KYEONGSEOK LEE</h1>
        <div className="profile-contact">lks020305@gmail.com | 82+ 1072593050</div>
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
