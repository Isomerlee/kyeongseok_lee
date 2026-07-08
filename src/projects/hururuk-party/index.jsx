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
            Details and background about the HURURUK Party will be updated here. This overview provides a concise summary of the event planning, design direction, and musical curation.
          </p>
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
