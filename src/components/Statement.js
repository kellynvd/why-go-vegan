import React from 'react';

const Statement = ({ fact, source }) => (
  <div className="container">    
    <blockquote className="quote">
      <p className="title is-4">{fact}</p>
      <p className="subtitle"><small>{source}</small></p>
    </blockquote>
  </div>
);

export default Statement;
