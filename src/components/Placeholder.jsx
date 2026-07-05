import React from 'react';

const Placeholder = ({ type = 'inline', text = 'Image Placeholder' }) => {
  return (
    <div className={`placeholder-box placeholder-${type}`}>
      <span>{text}</span>
    </div>
  );
};

export default Placeholder;
