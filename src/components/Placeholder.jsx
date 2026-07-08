import React from 'react';

const Placeholder = ({ type = 'inline', text = 'Image Placeholder', filename }) => {
  return (
    <div className={`placeholder-box placeholder-${type}`}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span>{text}</span>
        {filename && (
          <code 
            style={{ 
              padding: '0.2rem 0.4rem', 
              background: 'var(--border-color)', 
              borderRadius: '4px', 
              fontSize: '0.75rem',
              color: 'var(--text-color)',
              cursor: 'pointer',
              userSelect: 'all'
            }}
            title="클릭하여 파일명 복사"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigator.clipboard.writeText(filename);
              alert(`파일명이 복사되었습니다: ${filename}`);
            }}
          >
            {filename}
          </code>
        )}
      </div>
    </div>
  );
};

export default Placeholder;
