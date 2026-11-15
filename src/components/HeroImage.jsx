import React from 'react';
import Placeholder from './Placeholder';

const HeroImage = ({ project }) =>
  project.thumbnailSrc ? (
    <div className="hero-image">
      <img src={project.thumbnailSrc} alt="Project Hero" style={{ objectPosition: project.thumbnailPosition }} />
    </div>
  ) : (
    <Placeholder type="hero" text={project.heroText} filename={`${project.id}_thumbnail`} />
  );

export default HeroImage;
