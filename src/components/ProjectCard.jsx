import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from './Placeholder';

const ProjectCard = ({ id, title }) => {
  return (
    <Link to={`/project/${id}`} className="project-card">
      <Placeholder type="card" text="Project Thumbnail" />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
