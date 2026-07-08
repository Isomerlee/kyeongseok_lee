import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';
import paperPdf from './Finalterm_Paper_Team_Alpha_revised.pdf';

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
const paperThumbModules = import.meta.glob('./images/paper_thumb.{jpg,jpeg,png,JPG,PNG}', { eager: true });

const finalImages = getImages(finalModules, 'final');
const processImages = getImages(processModules, 'process');
const paperThumbSrc = Object.keys(paperThumbModules).length > 0 ? paperThumbModules[Object.keys(paperThumbModules)[0]].default : null;

const ProjectLGOven = () => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'var(--text-color)',
    color: 'var(--bg-color)',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
    marginTop: '1rem',
    marginRight: '1rem',
    cursor: 'pointer'
  };

  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Lightwave Oven Redesign</h1>
        <p className="project-subtitle">LG Objet Collection Lightwave Oven Redesign</p>
      </div>

      <HeroImage id="lg-oven" text="Main Project Image" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> LG Electronics X UNIST (Team Project)</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> UX/UI Designer</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 26.03.04 - 26.06.26</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> Figma, Solidworks, Keyshots, Premiere Pro</p>
          </div>
          <p>
            The Lightwave Oven aims to provide a premium cooking experience for "Cooking Newbies". However, opaque cooking status and complicated controls diminished the user's sense of control. Through In-Depth Interviews and Hybrid Affinity Diagrams, we found that users struggle with invisible food status and untrusted auto-cook features. To solve this, we evolved the oven into an <strong>'Intelligent Cooking Platform'</strong> featuring a Panorama Display, ThinQ AI Assistant, and Handle Indicators to guide the user seamlessly through the cooking process.
          </p>
        </section>

        <section>
          {finalImages.length > 0 ? (
            <ImageGallery images={finalImages} />
          ) : (
            <div className="placeholder-box placeholder-hero" style={{ height: '300px' }}>
              'lg-oven/images/' 폴더에 final1.jpg ~ final10.jpg 파일을 넣어주시면 결과물 갤러리가 나타납니다!
            </div>
          )}
        </section>

        <section style={{ marginTop: '3rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {/* Video Thumbnail */}
            <div>
              <div className="placeholder-hero" style={{ marginBottom: '1rem', backgroundColor: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', overflow: 'hidden' }}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/sZC6roWM2tI" 
                  title="LG Lightwave Oven Redesign Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p style={{ textAlign: 'center', margin: 0, fontWeight: '500' }}>Video</p>
            </div>

            {/* Thesis Download Thumbnail */}
            <div>
              <a href={paperPdf} download="Finalterm_Paper_Team_Alpha_revised.pdf" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="placeholder-hero" style={{ 
                  marginBottom: '1rem', 
                  backgroundColor: 'var(--hover-bg)', 
                  border: '1px solid var(--border-color)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '4px', 
                  overflow: 'hidden',
                  color: 'var(--text-color)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector('.download-overlay');
                  if(overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector('.download-overlay');
                  if(overlay) overlay.style.opacity = '0';
                }}
                >
                  {paperThumbSrc ? (
                    <img className="paper-thumb-img" src={paperThumbSrc} alt="Thesis Paper Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  ) : (
                    <div style={{ padding: '2rem', textAlign: 'center', width: '100%' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📄</div>
                      <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Thesis Paper</h3>
                      <p style={{ margin: 0, marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--secondary-text)' }}>'paper_thumb.jpg' 파일을 넣어주세요</p>
                    </div>
                  )}
                  <div className="download-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(3px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '0',
                    transition: 'all 0.3s ease',
                    fontWeight: '300',
                    fontSize: '1.05rem',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    pointerEvents: 'none'
                  }}>
                    Click to download
                  </div>
                </div>
              </a>
              <p style={{ textAlign: 'center', margin: 0, fontWeight: '500' }}>Paper</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid var(--border-color)' }}>
          {processImages.length > 0 ? (
            <ImageGallery images={processImages} />
          ) : (
            <div className="placeholder-box placeholder-hero" style={{ height: '300px' }}>
              'lg-oven/images/' 폴더에 process1.jpg ~ process10.jpg 파일을 넣어주시면 과정 갤러리가 나타납니다!
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectLGOven;
