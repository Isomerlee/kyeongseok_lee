import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';

const imageModules = import.meta.glob('./images/photo*.{jpg,jpeg,png,JPG,PNG}', { eager: true });

const galleryImages = Object.keys(imageModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/photo(\d+)/)?.[1] || 0);
    const numB = parseInt(b.match(/photo(\d+)/)?.[1] || 0);
    return numA - numB;
  })
  .map(path => ({
    src: imageModules[path].default,
    alt: path.split('/').pop().split('.')[0]
  }));

const ProjectHururukParty = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>HURURUK Party</h1>
        <p className="project-subtitle">Local Event Project</p>
      </div>

      <HeroImage id="hururuk-party" text="Main Project Image" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Local Event</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> Project Director, Lead Designer, Music Director</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> May 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> -</p>
          </div>
          <p>
            <strong>RUDIMENT X Pepper Coffee Presents: HURURUK Party</strong><br/><br/>
            Ulsan's trendiest cafe, Pepper Coffee, and the coolest crew, RUDIMENT, have teamed up. Join us for a Sunday filled with delicious food, lifestyle curation, and great music.<br/><br/>
            Local DJs from Seoul and Busan's underground scenes set the vibe, transforming the space with music that makes your body move.<br/><br/>
            On May 11th at Pepper Coffee, we enjoyed the tastiest Sunday where sunshine, people, sound, food, and objects all came together!
          </p>
        </section>

        <section>
          <div className="hero-image" style={{ borderRadius: '4px', overflow: 'hidden', backgroundColor: 'var(--border-color)', aspectRatio: '16/9', marginBottom: '4rem' }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/sQ8xsh3y3vk" 
              title="Hururuk Party Main Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          {galleryImages.length > 0 ? (
            <ImageGallery images={galleryImages} />
          ) : (
            <div className="placeholder-box placeholder-hero">
              'hururuk-party/images/' 폴더 안에 photo1.jpg ~ photo10.jpg 파일을 넣어주시면 갤러리가 자동으로 완성됩니다!
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectHururukParty;
