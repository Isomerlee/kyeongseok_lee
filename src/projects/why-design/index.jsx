import React from 'react';
import HeroImage from '../../components/HeroImage';
import ImageGallery from '../../components/ImageGallery';

// 'images' 폴더 내의 photo1 ~ photo10 (jpg, png 등) 파일을 자동으로 모두 불러옵니다.
const imageModules = import.meta.glob('./images/photo*.{jpg,jpeg,png,JPG,PNG}', { eager: true });

// 파일명에 포함된 숫자(1~10)를 기준으로 순서대로 정렬하여 갤러리 배열을 만듭니다.
const galleryImages = Object.keys(imageModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/photo(\d+)/)?.[1] || 0);
    const numB = parseInt(b.match(/photo(\d+)/)?.[1] || 0);
    return numA - numB;
  })
  .map(path => ({
    src: imageModules[path].default,
    alt: path.split('/').pop().split('.')[0] // 예: "photo1"
  }));

const ProjectWhyDesign = () => {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Why Design</h1>
        <p className="project-subtitle">Promoting the Design Department at UNIST</p>
      </div>

      <HeroImage id="why-design" text="Main Project Image" />

      <div className="project-content">
        <section>
          <div className="project-metadata" style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--secondary-text)' }}>
            <p style={{ marginBottom: '0.2rem' }}><strong>Type:</strong> Exhibition & Seminar</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Role:</strong> Project Leader & Lead Designer</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Period:</strong> 2026</p>
            <p style={{ marginBottom: '0.2rem' }}><strong>Tools:</strong> Illustrator, Photoshop, Figma, InDesign</p>
          </div>
          <p>
            As a design department within an institute of science and technology (UNIST), many people are unaware of why we exist and what we do. To address this and promote our department, we organized "Why Design" in the format of a major explanation session. The event featured exhibitions of major class results, insightful seminars, and various interactive participation activities to help visitors understand the unique value of our science-integrated design education.
          </p>
        </section>

        <section>
          {galleryImages.length > 0 ? (
            <ImageGallery images={galleryImages} />
          ) : (
            <div className="placeholder-box placeholder-hero">
              'why-design/images/' 폴더 안에 photo1.jpg ~ photo10.jpg 파일을 넣어주시면 자동으로 갤러리가 완성됩니다!
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectWhyDesign;
