import React from 'react';
import HeroImage from '../../components/HeroImage';
import Placeholder from '../../components/Placeholder';

const ProjectSauceRadio = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Sauce Radio</h1>
        <p className="project-subtitle">Ulsan Location DJ Mix Video</p>
      </div>

      <HeroImage id="sauce-radio" text="Sauce Radio Thumbnail or Video" />

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Performance</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 2024 - 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> DJ, Visual Director</p>
          </div>
          <p>
            Details and background about the Sauce Radio project will be updated here. This overview provides a concise summary of the performance setup, location context, and visual direction.
          </p>
        </section>

        <section>
          <h2>Gallery</h2>
          <Placeholder type="full" text="Sauce Radio Performance Scene 1" filename="sauce_radio_1" />
          <Placeholder type="full" text="Sauce Radio Performance Scene 2" filename="sauce_radio_2" />
        </section>
      </div>
    </div>
  );
};

export default ProjectSauceRadio;
