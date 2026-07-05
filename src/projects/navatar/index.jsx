import React from 'react';
import Placeholder from '../../components/Placeholder';

const ProjectNavatar = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>NAVATAR</h1>
        <p className="project-subtitle">News Consumption Persona for Korean Twenties</p>
      </div>

      <Placeholder type="hero" text="Main Project Image / Prototype Demo" filename="hero.png" />

      <div className="project-content">
        <section>
          <h2>Problem</h2>
          <p>20s intentionally avoid news due to "cognitive fatigue" and "psychological resistance against extreme opinions." One-size-fits-all platforms force views, causing churn.</p>
        </section>

        <section>
          <h2>User Study (2-Axis Matrix)</h2>
          <Placeholder type="inline" text="2-Axis Matrix Diagram" filename="matrix.png" />
          <p>Mapped users based on 'Opinion Acceptance' and 'Exploration Motivation' to derive 4 Personas:</p>
          <ul>
            <li><strong>Explorer (탐구자형)</strong></li>
            <li><strong>Observer (관찰자형)</strong></li>
            <li><strong>Strategist (전략가형)</strong></li>
            <li><strong>Efficiencyist (효율주의자형)</strong></li>
          </ul>
        </section>

        <section>
          <h2>Design Strategy</h2>
          <Placeholder type="inline" text="Design Strategy Visuals" filename="strategy.png" />
          <p>Instead of forcing ideology, provide "Customized News Navigation Tools" tailored to each persona's defense mechanism.</p>
          <ul>
            <li>Explorer ➔ Issue Mind-map</li>
            <li>Observer ➔ Issue Context-tree</li>
            <li>Strategist ➔ Issue Dashboard</li>
            <li>Efficiencyist ➔ Issue Briefing</li>
          </ul>
        </section>

        <section>
          <h2>Validation & Iteration</h2>
          <p>Prototype testing showed quantitative effectiveness but revealed that 'forced exposure' undermines user agency. Pivoted to "User-Driven Intervention Systems" (Persona Swipe, Folded Card, Modular Stack) to restore user control and mitigate resistance.</p>
          <Placeholder type="inline" text="User-Driven Intervention Systems Prototype" filename="prototype.png" />
        </section>
      </div>
    </div>
  );
};

export default ProjectNavatar;
