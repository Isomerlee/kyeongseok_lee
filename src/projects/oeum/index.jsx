import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';

const getImages = (modules, prefix) => {
  return Object.keys(modules)
    .sort((a, b) => {
      const numA = parseInt(a.match(new RegExp(`${prefix}(\\d+)`))?.[1] || 0);
      const numB = parseInt(b.match(new RegExp(`${prefix}(\\d+)`))?.[1] || 0);
      return numA - numB;
    })
    .map(path => ({
      src: modules[path].default,
      alt: path.split('/').pop().split('.')[0]
    }));
};

const finalModules = import.meta.glob('./images/final*.{jpg,jpeg,png,JPG,PNG}', { eager: true });
const processModules = import.meta.glob('./images/process*.{jpg,jpeg,png,JPG,PNG}', { eager: true });

const finalImages = getImages(finalModules, 'final');
const processImages = getImages(processModules, 'process');

const ProjectOeum = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Oum (오음)</h1>
        <p className="project-subtitle">Oum Project Details</p>
      </div>

      <HeroImage id="oeum" text="Main Project Image" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Product Design</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> Lead Designer, Interaction Designer</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> SolidWorks, KeyShot, Premiere Pro, After Effects, Figma</p>
          </div>
          <p>
            Details and background about the Oum (오음) project will be updated here. This overview provides a concise summary of the project goals, target audience, and final deliverables.
          </p>
        </section>

        <section>
          {finalImages.length > 0 ? (
            <ImageGallery images={finalImages} />
          ) : (
            <div className="placeholder-box placeholder-hero" style={{ height: '300px' }}>
              'oeum/images/' 폴더에 final1.jpg ~ final10.jpg 파일을 넣어주시면 결과물 갤러리가 나타납니다!
            </div>
          )}
        </section>

        <section style={{ marginTop: '4rem' }}>
          {processImages.length > 0 ? (
            <ImageGallery images={processImages} />
          ) : (
            <div className="placeholder-box placeholder-hero" style={{ height: '300px' }}>
              'oeum/images/' 폴더에 process1.jpg ~ process10.jpg 파일을 넣어주시면 과정 갤러리가 나타납니다!
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectOeum;
