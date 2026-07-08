import React from 'react';
import HeroImage from '../../components/HeroImage';

const locations = [
  {
    name: "Flame Barbershop",
    address: "11, Wangsaeng-ro 66beon-gil, Nam-gu, Ulsan (@flame_barbershop_us)",
    videos: ["tUp7ikJdOZI", "M7GpGHb95Cg"]
  },
  {
    name: "Slofe",
    address: "2F, 20, Wangsaeng-ro 20beon-gil, Nam-gu, Ulsan (@slofe___)",
    videos: ["4-mk4dD-Jq0", "ybdmWZY27JQ"]
  },
  {
    name: "Old Heritage",
    address: "239, Dotjil-ro, Nam-gu, Ulsan (@old_heritage_usn)",
    videos: ["W5A2C_RDRSw", "eaJ-rEQwwmA"]
  },
  {
    name: "Cokafella",
    address: "3, Daegongwon-ro 97beon-gil, Nam-gu, Ulsan (@cokafella)",
    videos: ["marrOxSQbY4", "JlYFxs3L2fE"]
  }
];

const ProjectSauceRadio = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Sauce Radio</h1>
        <p className="project-subtitle">Ulsan Location DJ Mix Video</p>
      </div>

      <HeroImage id="sauce-radio" text="Sauce Radio Thumbnail or Video" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Performance</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> DJ, Visual Director</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 2024 - 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> rekordbox, Premiere Pro, After Effects</p>
          </div>
          <p>
            Sauce Radio is a DJ mix series that introduces unique spaces across Ulsan, Korea and provides a curated musical experience through the selections of various DJs. Through this series, listeners can enjoy both the beauty of these spaces and a broad musical spectrum.
            <br /><br />
            Directed by RUDIMENT(@rudiment052) based in Ulsan
            <br /><br />
            <strong>Team Sauce Radio</strong><br />
            MIRA @plzsmi1e<br />
            HELI @helibeat<br />
            TAFF @taff_yo<br />
            Somerlee @isomerlee
          </p>
        </section>

        <section>
          {locations.map((loc, idx) => (
            <div key={idx} style={{ marginBottom: '4rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{loc.name}</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--secondary-text)', marginTop: '0.25rem' }}>{loc.address}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {loc.videos.map((id, index) => (
                  <div key={index} className="placeholder-hero" style={{ marginBottom: 0, backgroundColor: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', overflow: 'hidden' }}>
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${id}`} 
                      title={`Sauce Radio Video - ${loc.name} ${index + 1}`}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectSauceRadio;
