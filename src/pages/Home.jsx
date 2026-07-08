import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      id: 'navatar',
      title: 'NAVATAR',
      year: '2026',
    },
    {
      id: 'lg-oven',
      title: 'Lightwave Oven Redesign',
      year: '2026',
    },
    {
      id: 'why-design',
      title: 'Why Design',
      year: '2026',
    },
    {
      id: 'drift',
      title: '표류 (drift)',
      year: '2025',
    },
    {
      id: 'sauce-radio',
      title: 'Sauce Radio',
      year: '2025',
    },
    {
      id: 'hururuk-party',
      title: 'HURURUK Party',
      year: '2025',
    },
    {
      id: 'oeum',
      title: 'Oum (오음)',
      year: '2025',
    },
    {
      id: 'industrial-city',
      title: 'Industrial City',
      year: '2024',
    }
  ];

  return (
    <div>
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((proj) => (
            <ProjectCard 
              key={proj.id}
              id={proj.id}
              title={proj.title}
              year={proj.year}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
