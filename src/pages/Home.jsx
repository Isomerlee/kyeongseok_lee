import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      id: 'navatar',
      title: 'NAVATAR: News Consumption Persona for Korean Twenties',
      category: 'Digital UX & Behavioral Design',
      summary: 'Visually mitigating psychological biases through customized news navigation tools.'
    },
    {
      id: 'drift',
      title: '표류 (drift): Interactive Audiovisual Electronic Music Performance',
      category: 'Computational Interactive Art',
      summary: 'Translating unpredictable analog sound into real-time generative visual waves in physical space.'
    },
    {
      id: 'lg-oven',
      title: 'LG Objet Collection Lightwave Oven Redesign',
      category: 'Tangible Hardware UX & HCI',
      summary: 'Restoring user agency by making hidden machine processes visible through intuitive interfaces.'
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
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
