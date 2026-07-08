import React from 'react';
import Placeholder from './Placeholder';

const thumbnails = import.meta.glob('../projects/*/images/*_thumbnail.*', { eager: true, import: 'default' });

const HeroImage = ({ id, text }) => {
  const thumbKey = Object.keys(thumbnails).find(key => key.includes(`/${id}/images/${id}_thumbnail.`));
  const imgSrc = thumbKey ? thumbnails[thumbKey] : null;

  return imgSrc ? (
    <div className="hero-image">
      <img 
        src={imgSrc} 
        alt="Project Hero" 
        style={{ objectPosition: id === 'source-radio' ? 'top' : 'center' }} 
      />
    </div>
  ) : (
    <Placeholder type="hero" text={text} filename={`${id}_thumbnail`} />
  );
};

export default HeroImage;
