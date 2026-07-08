import React from 'react';
import HeroImage from '../../components/HeroImage';
import Placeholder from '../../components/Placeholder';

const ProjectNavatar = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>NAVATAR</h1>
        <p className="project-subtitle">News Consumption Persona for Korean Twenties</p>
      </div>

      <HeroImage id="navatar" text="Main Project Image / Prototype Demo" />

      <div className="project-content">
        <section>
          <h2>Overview</h2>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> Lead UX/UI Designer & Full-stack Developer</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> Oct 2024 - Dec 2024</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> React, Antigravity, Gemini API, Claude API</p>
          </div>
          <p>
            NAVATAR is a personalized news consumption platform designed for Korean Twenties. Traditional news platforms often overwhelm young readers with dense text and polarized content. To bridge this gap, NAVATAR utilizes advanced LLMs (Gemini, Claude) to re-write, simplify, and personalize news articles. By organizing information into intuitive formats—like debate chats, timeline summaries, and jargon explanations—it lowers the barrier to entry and encourages critical thinking.
          </p>
        </section>

        <section>
          <h2>Gallery</h2>
          <Placeholder type="full" text="Target User Persona & Pain Points" filename="navatar_persona" />
          <Placeholder type="full" text="LLM Architecture & User Flow" filename="navatar_flow" />
          <Placeholder type="full" text="Final UI & Debate Chat Interface" filename="navatar_ui" />
        </section>
      </div>
    </div>
  );
};

export default ProjectNavatar;
