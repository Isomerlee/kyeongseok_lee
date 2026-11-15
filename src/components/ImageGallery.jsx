import React, { useState } from 'react';
import Placeholder from './Placeholder';

// fit: 'cover'(기본, 16:9로 꽉 채움) | 'contain'(세로로 긴 이미지도 잘리지 않게 전체 표시)
const ImageGallery = ({ images, fit = 'cover' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImage = images[selectedIndex];

  return (
    <div className="image-gallery">
      <div className="gallery-main">
        {currentImage.src ? (
          <img src={currentImage.src} alt={currentImage.alt || 'Gallery image'} className="gallery-main-img" style={fit === 'contain' ? { objectFit: 'contain' } : undefined} />
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
                  <img src={img.src} alt={img.alt || `Thumbnail ${idx + 1}`} loading="lazy" decoding="async" />
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
