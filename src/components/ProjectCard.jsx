import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from './Placeholder';

const thumbnails = import.meta.glob('../projects/*/images/*_thumbnail.*', { eager: true, import: 'default' });

const ProjectCard = ({ id, title, year }) => {
  const thumbKey = Object.keys(thumbnails).find(key => key.includes(`/${id}/images/${id}_thumbnail.`));
  const imgSrc = thumbKey ? thumbnails[thumbKey] : null;

  return (
    <Link to={`/project/${id}`} className="project-card">
      {imgSrc ? (
        <div className="project-thumbnail">
          <img 
            src={imgSrc} 
            alt={`${title} thumbnail`} 
            style={{ objectPosition: id === 'source-radio' ? 'top' : 'center' }} 
          />
        </div>
      ) : (
        <Placeholder type="card" text="Project Thumbnail" filename={`${id}_thumbnail`} />
      )}
      <div className="project-card-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 className="project-card-title">{title}</h3>
          {year && <span className="project-card-year">{year}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
