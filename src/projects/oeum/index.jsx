import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';

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
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 2025</p>
          </div>
          <p>
            Details and background about the Oum (오음) project will be updated here. This overview provides a concise summary of the project goals, target audience, and final deliverables.
          </p>
        </section>

        <section>
          <ImageGallery images={[
            { alt: "Brand Identity Concept", filename: "oeum_branding" },
            { alt: "Packaging Design", filename: "oeum_packaging" },
            { alt: "Marketing Materials", filename: "oeum_marketing" },
            { alt: "Additional View 1", filename: "oeum_extra1" },
            { alt: "Additional View 2", filename: "oeum_extra2" }
          ]} />
        </section>
      </div>
    </div>
  );
};

export default ProjectOeum;
