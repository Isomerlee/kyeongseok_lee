import React from 'react';
import HeroImage from '../../components/HeroImage';
import Placeholder from '../../components/Placeholder';

const ProjectIndustrialCity = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Industrial City</h1>
        <p className="project-subtitle">DJ & Visual Director</p>
      </div>

      <HeroImage id="industrial-city" text="Main Project Image" />

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Performance</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> Nov 2024, Jan 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> DJ, Visual Director</p>
          </div>
          <p>
            Details and background about the Industrial City performance will be updated here. This overview provides a concise summary of the performance concept, DJ set, and visual direction.
          </p>
        </section>

        <section>
          <h2>Gallery</h2>
          <Placeholder type="full" text="Industrial City Performance 1" filename="industrial_city_1" />
          <Placeholder type="full" text="Industrial City Performance 2" filename="industrial_city_2" />
        </section>
      </div>
    </div>
  );
};

export default ProjectIndustrialCity;
