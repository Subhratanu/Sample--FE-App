import React from 'react';
import './Shimmer.css';

const Shimmer = ({ count = 4 }) => {
  return (
    <div className="shimmer-container">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text short"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
