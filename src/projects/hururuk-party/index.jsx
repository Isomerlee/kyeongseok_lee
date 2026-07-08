import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';

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
          <ImageGallery images={[
            { alt: "Party Event Branding", filename: "hururuk_branding" },
            { alt: "Event Photography", filename: "hururuk_photos" },
            { alt: "Promotional Materials", filename: "hururuk_promo" },
            { alt: "Additional View 1", filename: "hururuk_extra1" },
            { alt: "Additional View 2", filename: "hururuk_extra2" }
          ]} />
        </section>
      </div>
    </div>
  );
};

export default ProjectHururukParty;
