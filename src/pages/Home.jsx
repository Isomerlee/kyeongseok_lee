import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      id: 'navatar',
      title: 'NAVATAR',
      subtitle: 'News Consumption Persona for Korean Twenties',
    },
    {
      id: 'drift',
      title: '표류 (drift)',
      subtitle: 'Interactive Audiovisual Electronic Music Performance',
    },
    {
      id: 'lg-oven',
      title: 'LG Objet Collection',
      subtitle: 'Lightwave Oven Redesign',
    }
  ];

  return (
    <div>
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((proj) => (
            <ProjectCard 
              key={proj.id}
              id={proj.id}
              title={proj.title}
              subtitle={proj.subtitle}
              thumbnailFilename={`${proj.id}_thumbnail.png`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
