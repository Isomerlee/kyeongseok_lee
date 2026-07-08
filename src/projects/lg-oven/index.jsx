import React from 'react';
import HeroImage from '../../components/HeroImage';
import Placeholder from '../../components/Placeholder';
import paperPdf from './Finalterm_Paper_Team_Alpha_revised.pdf';

const ProjectLGOven = () => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'var(--text-color)',
    color: 'var(--bg-color)',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
    marginTop: '1rem',
    marginRight: '1rem',
    cursor: 'pointer'
  };

  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Lightwave Oven Redesign</h1>
        <p className="project-subtitle">LG Objet Collection Lightwave Oven Redesign</p>
      </div>

      <HeroImage id="lg-oven" text="Main Project Image" />

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> LG Electronics X UNIST (Team Project)</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 26.03.04 - 26.06.26</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> Figma, Solidworks, Keyshots, Premiere Pro</p>
          </div>
          <p>
            The Lightwave Oven aims to provide a premium cooking experience for "Cooking Newbies". However, opaque cooking status and complicated controls diminished the user's sense of control. Through In-Depth Interviews and Hybrid Affinity Diagrams, we found that users struggle with invisible food status and untrusted auto-cook features. To solve this, we evolved the oven into an <strong>'Intelligent Cooking Platform'</strong> featuring a Panorama Display, ThinQ AI Assistant, and Handle Indicators to guide the user seamlessly through the cooking process.
          </p>
        </section>

        <section>
          <h2>Gallery</h2>
          <Placeholder type="full" text="In-Depth Interview & Hybrid Affinity Diagram" filename="lg_user_study" />
          <Placeholder type="full" text="Intelligent Cooking Platform Strategy & UI Flow" filename="lg_strategy" />
          <Placeholder type="full" text="Panorama Display & Physical Controls" filename="lg_solutions" />
        </section>

        <section style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
          <h2>Project Resources</h2>
          <div>
            <a href="#" className="button" style={buttonStyle}>Watch Video</a>
            <a href={paperPdf} download="Finalterm_Paper_Team_Alpha_revised.pdf" className="button" style={buttonStyle}>Download Thesis Paper</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectLGOven;
