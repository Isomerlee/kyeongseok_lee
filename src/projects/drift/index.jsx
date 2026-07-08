import React from 'react';
import HeroImage from '../../components/HeroImage';
import perf1 from './images/drift_performance1.jpg';
import perf2 from './images/drift_performance2.jpg';
import perf3 from './images/drift_performance3.jpg';
import architecture from './images/drift_architecture.png';
import ImageGallery from '../../components/ImageGallery';

const ProjectDrift = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>표류 (drift)</h1>
        <p className="project-subtitle">Interactive Audiovisual Electronic Music Performance</p>
      </div>

      <HeroImage id="drift" text="Main Project Image or Video" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Performance</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> Nov 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> Visual Director, Lead Designer</p>
          </div>
          <p>
            "표류 (drift)" is a live audiovisual electronic music performance. The performer intentionally deconstructs finished tracks on stage using modular synthesizers, while a generative AI system instantly detects these scattered audio signals and visualizes them as constantly forming and dissolving images in real-time. This highly responsive, low-latency architecture bridges analog sound with generative AI visuals.
          </p>
        </section>

        <section>
          <ImageGallery images={[
            { src: perf1, alt: "Performance Scene 1" },
            { src: perf2, alt: "Performance Scene 2" },
            { src: perf3, alt: "Performance Scene 3" },
            { src: architecture, alt: "System Architecture Flowchart" },
            { alt: "Additional Scene", filename: "drift_extra" }
          ]} />
        </section>
      </div>
    </div>
  );
};

export default ProjectDrift;
