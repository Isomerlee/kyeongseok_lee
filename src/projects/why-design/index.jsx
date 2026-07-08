import React from 'react';
import HeroImage from '../../components/HeroImage';
import Placeholder from '../../components/Placeholder';

const ProjectWhyDesign = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Why Design</h1>
        <p className="project-subtitle">Promoting the Design Department at UNIST</p>
      </div>

      <HeroImage id="why-design" text="Main Project Image" />

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Exhibition & Seminar</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 2026</p>
          </div>
          <p>
            As a design department within an institute of science and technology (UNIST), many people are unaware of why we exist and what we do. To address this and promote our department, we organized "Why Design" in the format of a major explanation session. The event featured exhibitions of major class results, insightful seminars, and various interactive participation activities to help visitors understand the unique value of our science-integrated design education.
          </p>
        </section>

        <section>
          <h2>Gallery</h2>
          <Placeholder type="full" text="Exhibition Space & Layout" filename="why_design_exhibition" />
          <Placeholder type="full" text="Seminar & Student Participation" filename="why_design_seminar" />
          <Placeholder type="full" text="Class Result Artworks" filename="why_design_artworks" />
        </section>
      </div>
    </div>
  );
};

export default ProjectWhyDesign;
