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

const ProjectDrift = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>표류 (drift)</h1>
        <p className="project-subtitle">Interactive Audiovisual Electronic Music Performance</p>
      </div>

      <HeroImage id="drift" text="Main Project Image or Video" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Performance</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> Visual Director, Lead Designer</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> Nov 2025</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> TouchDesigner, Ableton Live, Python, Adobe Tools</p>
          </div>
          <p>
            "표류 (drift)" is a live audiovisual electronic music performance. The performer intentionally deconstructs finished tracks on stage using modular synthesizers, while a generative AI system instantly detects these scattered audio signals and visualizes them as constantly forming and dissolving images in real-time. This highly responsive, low-latency architecture bridges analog sound with generative AI visuals.
          </p>
        </section>

        <section>
          {galleryImages.length > 0 ? (
            <ImageGallery images={galleryImages} />
          ) : (
            <div className="placeholder-box placeholder-hero">
              'drift/images/' 폴더 안에 photo1.jpg ~ photo10.jpg 파일을 넣어주시면 갤러리가 자동으로 완성됩니다!
            </div>
          )}
          <div className="credit-block">
            <span className="credit-segment">표류(drift), Kyeongseok Lee, Minsung Bu, 2025</span>
            <span className="credit-separator">|</span>
            <span className="credit-segment">Interactive Live Music Performance</span>
            <br className="desktop-only-br" />
            <span className="credit-segment">2025 BEMORE Arts Space Support Program</span>
            <span className="credit-separator">|</span>
            <span className="credit-segment">BEMORE(Complex Cultural Space), Ulsan, Korea</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDrift;
