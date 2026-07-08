import React from 'react';
import HeroImage from '../../components/HeroImage';
import Placeholder from '../../components/Placeholder';

const ProjectOeum = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Oum (오음)</h1>
        <p className="project-subtitle">Oum Project Details</p>
      </div>

      <HeroImage id="oeum" text="Main Project Image" />

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 2025</p>
          </div>
          <p>
            Details and background about the Oum (오음) project will be updated here. This overview provides a concise summary of the project goals, target audience, and final deliverables.
          </p>
        </section>

        <section>
          <h2>Gallery</h2>
          <Placeholder type="full" text="Oum Project Detail 1" filename="oeum_detail_1" />
          <Placeholder type="full" text="Oum Project Detail 2" filename="oeum_detail_2" />
        </section>
      </div>
    </div>
  );
};

export default ProjectOeum;
