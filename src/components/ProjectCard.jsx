import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from './Placeholder';

const thumbnails = import.meta.glob('../projects/*/images/*_thumbnail.png', { eager: true, import: 'default' });

const ProjectCard = ({ id, title, subtitle, thumbnailFilename }) => {
  const thumbPath = `../projects/${id}/images/${thumbnailFilename}`;
  const imgSrc = thumbnails[thumbPath];

  return (
    <Link to={`/project/${id}`} className="project-card">
      {imgSrc ? (
        <div className="project-thumbnail">
          <img src={imgSrc} alt={`${title} thumbnail`} />
        </div>
      ) : (
        <Placeholder type="card" text="Project Thumbnail" filename={thumbnailFilename} />
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
      </div>
    </Link>
  );
};

export default ProjectCard;
