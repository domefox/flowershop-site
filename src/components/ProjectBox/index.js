import React from 'react';
import './style.css';

export const ProjectBox = ({ title, subtitle, image, boxImage, date }) => {
  return (
    <div className="project-box" style={{ backgroundImage: `url(${boxImage})` }}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-text">
        <h2 className="project-title">{title}</h2>
        <p className="project-subtitle">{subtitle}</p>
        <p className="project-date">{date}</p> 
      </div>
    </div>
  );
};