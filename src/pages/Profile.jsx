import React from 'react';

const Profile = () => {
  return (
    <div className="profile-page">
      <section className="cv-section">
        <h2>Designer's Statement</h2>
        <div className="statement">
          <h3>Translating the invisible into intuitive visual experiences.</h3>
          <p>
            My design philosophy is rooted in finding visual order within complexity. Whether analyzing the psychological data of news consumers, mapping erratic audio signals in live performances, or revealing the hidden states of hardware appliances, I focus on <strong>Data Visualization</strong> and <strong>HCI in Creative Expression</strong>. This portfolio presents three projects that cross the boundaries of Digital, Spatial, and Tangible mediums.
          </p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">UNIST (Ulsan National Institute of Science and Technology), Ulsan, Korea</span>
          </div>
          <p>B.S. in Design (Mar 2021 – Feb 2027 Expected)</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Research Topics</h2>
        <p>Computational Interactive Art, Data Visualization, HCI in Creative Expression</p>
      </section>

      <section className="cv-section">
        <h2>Work Experience</h2>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">Expressive Computing Lab, UNIST, Korea</span>
            <span className="cv-item-date">Dec 2022 – Apr 2023, Jul 2025 – Present</span>
          </div>
          <p>Undergraduate Intern</p>
        </div>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">OND Lab, UNIST, Korea</span>
            <span className="cv-item-date">Mar 2022 – Nov 2022</span>
          </div>
          <p>Part-time Designer</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Awards</h2>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">2024 Defense Open Data Application Competition</span>
            <span className="cv-item-date">2024</span>
          </div>
          <p>Excellence Award in Idea Planning (2nd Place)</p>
        </div>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">The 10th ROK Army Startup Competition</span>
            <span className="cv-item-date">2023</span>
          </div>
          <p>Creativity Awards</p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Leadership</h2>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">UNIST Design Department</span>
            <span className="cv-item-date">Jan 2026 – Present</span>
          </div>
          <p>Student President</p>
        </div>
        <div className="cv-item">
          <div className="cv-item-header">
            <span className="cv-item-title">UNIST Student Council Design-Information Team</span>
            <span className="cv-item-date">2022</span>
          </div>
          <p>Team Member</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
