import React, { useState } from 'react';
import Placeholder from './Placeholder';

const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImage = images[selectedIndex];

  return (
    <div className="image-gallery">
      <div className="gallery-main">
        {currentImage.src ? (
          <img src={currentImage.src} alt={currentImage.alt || 'Gallery image'} className="gallery-main-img" />
        ) : (
          <Placeholder type="full" text={currentImage.alt} filename={currentImage.filename} />
        )}
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {[-2, -1, 0, 1, 2].map((offset, i) => {
            const idx = (selectedIndex + offset + images.length * 10) % images.length;
            const img = images[idx];
            return (
              <div 
                key={`${i}-${idx}`} 
                className={`gallery-thumb ${offset === 0 ? 'active' : ''}`}
                onClick={() => setSelectedIndex(idx)}
              >
                {img.src ? (
                  <img src={img.src} alt={img.alt || `Thumbnail ${idx + 1}`} />
                ) : (
                  <div className="thumb-placeholder-mini">
                    <span>{idx + 1}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
