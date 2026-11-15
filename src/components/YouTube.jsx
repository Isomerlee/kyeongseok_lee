import React from 'react';

const YouTube = ({ id, title }) => (
  <iframe
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${id}`}
    title={title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default YouTube;
