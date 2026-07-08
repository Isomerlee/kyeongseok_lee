import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';

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
          <ImageGallery images={[
            { alt: "Podcast UI Design", filename: "sauce_ui" },
            { alt: "User Interaction Flow", filename: "sauce_interaction" },
            { alt: "Component Library", filename: "sauce_components" },
            { alt: "Additional View 1", filename: "sauce_extra1" },
            { alt: "Additional View 2", filename: "sauce_extra2" }
          ]} />
        </section>
      </div>
    </div>
  );
};

export default ProjectSauceRadio;
