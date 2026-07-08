import React from 'react';
import HeroImage from '../../components/HeroImage';
import Placeholder from '../../components/Placeholder';

const ProjectHururukParty = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>HURURUK Party</h1>
        <p className="project-subtitle">Local Event Project</p>
      </div>

      <HeroImage id="hururuk-party" text="Main Project Image" />

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Local Event</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> May 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> Project Director, Lead Designer, Music Director</p>
          </div>
          <p>
            Details and background about the HURURUK Party will be updated here. This overview provides a concise summary of the event planning, design direction, and musical curation.
          </p>
        </section>

        <section>
          <h2>Gallery</h2>
          <Placeholder type="full" text="HURURUK Party Scene 1" filename="hururuk_party_1" />
          <Placeholder type="full" text="HURURUK Party Scene 2" filename="hururuk_party_2" />
        </section>
      </div>
    </div>
  );
};

export default ProjectHururukParty;
