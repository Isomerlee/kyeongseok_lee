import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';

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
          <ImageGallery images={[
            { alt: "City Model Rendering", filename: "industrial_render" },
            { alt: "Architectural Plans", filename: "industrial_plans" },
            { alt: "Concept Sketches", filename: "industrial_sketches" },
            { alt: "Additional View 1", filename: "industrial_extra1" },
            { alt: "Additional View 2", filename: "industrial_extra2" }
          ]} />
        </section>
      </div>
    </div>
  );
};

export default ProjectIndustrialCity;
