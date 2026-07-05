import React from 'react';
import Placeholder from '../../components/Placeholder';

const ProjectDrift = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>표류 (drift): Interactive Audiovisual Electronic Music Performance</h1>
      </div>

      <Placeholder type="hero" text="Performance Real-time Visuals" />

      <div className="project-content">
        <section>
          <h2>Background</h2>
          <p>Breaking down barriers to unfamiliar experimental electronic music in Ulsan by expanding it into an intuitive visual experience.</p>
        </section>

        <section>
          <h2>Auditory Drift (Audio Deconstruction)</h2>
          <Placeholder type="inline" text="Live Performance Setup / Synthesizers" />
          <p>The performer intentionally deconstructs finished music tracks live on stage. A modular synthesizer overlays unpredictable noises to scatter the existing musical structure.</p>
        </section>

        <section>
          <h2>Visual Drift (Real-time Rendering)</h2>
          <Placeholder type="inline" text="Generative Visual Waves" />
          <p>The scattered audio signals (MIDI & Audio Signal) are sent to the generative AI 'Stream Diffusion'. It instantly detects these irregular waves, visualizing them as constantly forming and dissolving images on a massive projection.</p>
        </section>

        <section>
          <h2>System Architecture</h2>
          <Placeholder type="inline" text="System Architecture Diagram" />
          <p>Mapping physical analog inputs (Synthesizers / Ableton Push) ➔ Stream Diffusion Plug-in ➔ TouchDesigner ➔ Visual Projection & Interactive Art.</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDrift;
