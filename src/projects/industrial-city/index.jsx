import React from 'react';
import HeroImage from '../../components/HeroImage';

const videoIds = [
  "qMlCrYYOgwM",
  "Eu_OP3WM7Q0"
];

const ProjectIndustrialCity = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Industrial City</h1>
        <p className="project-subtitle">DJ & Visual Director</p>
      </div>

      <HeroImage id="industrial-city" text="Main Project Image" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Performance</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> DJ, Visual Director</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> Nov 2024, Jan 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> Midjourney, Kling AI, Premiere Pro, After Effects, rekordbox</p>
          </div>
          <p>
            Ulsan-based subculture brand RUDIMENT continues its project to expand local underground culture by capturing Ulsan's identity as an 'Industrial City'. This project collaborates with Busan's club, Moment, creating a new cultural synergy that connects Ulsan and Busan.
            <br /><br />
            The 'Industrial City' series is a party that reinterprets Ulsan's industrial imagery by combining AI-driven visual arts and DJing. In vol.3, under the theme of 'Neo-Ulsan', we offer an immersive experience through the collaboration of Moment's VJs and an AI visualizer that weaves various sub-themes in an omnibus format. Participants can experience the moment when industrial elements transform into modern art within this space.
            <br /><br />
            Through this project, we foster the growth of the local art community and demonstrate that underground culture can bloom even in an industrial city.
          </p>
        </section>

        <section>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {videoIds.map((id, index) => (
              <div key={index} className="placeholder-hero" style={{ marginBottom: 0, backgroundColor: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', overflow: 'hidden', aspectRatio: '16/9' }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${id}`} 
                  title={`Industrial City Video ${index + 1}`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectIndustrialCity;
