import React from 'react';

const Statement = ({ fact, source }) => (
  <div className="statement">    
    <blockquote className="quote">
      <p className="fact">{fact}</p>
      <p className="source">{source}</p>
    </blockquote>
  </div>
);

export default Statement;
