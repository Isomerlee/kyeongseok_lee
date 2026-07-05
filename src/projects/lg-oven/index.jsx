import React from 'react';
import Placeholder from '../../components/Placeholder';

const ProjectLGOven = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>LG Objet Collection Lightwave Oven Redesign</h1>
      </div>

      <Placeholder type="hero" text="Final Design / Render of the Oven" />

      <div className="project-content">
        <section>
          <h2>Problem</h2>
          <p>Automation in premium ovens hides the cooking process, causing a critical loss of user agency and trust. Users don't fully understand, trust, or make use of the device due to "invisible food status" and "complex physical controls."</p>
        </section>

        <section>
          <h2>Design Strategy</h2>
          <Placeholder type="inline" text="Concept Sktech / Strategy Visual" />
          <p>Restore process legibility to deliver a confident cooking experience. Translate hidden machine state data into a highly visible, intuitive dashboard.</p>
        </section>

        <section>
          <h2>Final Design (Panorama Display & UI System)</h2>
          
          <h3>Panorama Display</h3>
          <p>Displays settings, progress, and guidance across the entire oven glass.</p>
          <Placeholder type="inline" text="Panorama Display UI" />

          <h3>Chef Agent AI & ThinQ AI</h3>
          <p>Chef Agent AI curates perfect recipes for every moment, while ThinQ AI provides real-time advice on the transparent glass.</p>
          <Placeholder type="inline" text="AI Features Visual" />

          <h3>Handle Indicator & Voice Assistance</h3>
          <p>Elegant controls that guide the next step without interrupting the cooking flow.</p>
          <Placeholder type="inline" text="Handle Indicator Interaction" />
        </section>
      </div>
    </div>
  );
};

export default ProjectLGOven;
