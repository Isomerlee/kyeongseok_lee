import React from 'react';

const Placeholder = ({ type = 'inline', text = 'Image Placeholder', filename }) => {
  return (
    <div className={`placeholder-box placeholder-${type}`}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span>{text}</span>
        {filename && (
          <code style={{ 
            padding: '0.2rem 0.4rem', 
            background: 'var(--border-color)', 
            borderRadius: '4px', 
            fontSize: '0.75rem',
            color: 'var(--text-color)'
          }}>
            {filename}
          </code>
        )}
      </div>
    </div>
  );
};

export default Placeholder;
