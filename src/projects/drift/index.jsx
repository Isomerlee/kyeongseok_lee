import React from 'react';
import HeroImage from '../../components/HeroImage';
import perf1 from './images/drift_performance1.jpg';
import perf2 from './images/drift_performance2.jpg';
import perf3 from './images/drift_performance3.jpg';
import architecture from './images/drift_architecture.png';

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
          <h2>Overview</h2>
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
          <h2>Gallery</h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <img src={perf1} alt="Performance Scene 1" style={{ width: '100%', flex: 1, objectFit: 'cover' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <img src={perf2} alt="Performance Scene 2" style={{ width: '100%', flex: 1, objectFit: 'cover' }} />
              <img src={perf3} alt="Performance Scene 3" style={{ width: '100%', flex: 1, objectFit: 'cover' }} />
            </div>
          </div>
          <img src={architecture} alt="System Architecture Flowchart" style={{ width: '100%', marginBottom: '2rem' }} />
        </section>
      </div>
    </div>
  );
};

export default ProjectDrift;
