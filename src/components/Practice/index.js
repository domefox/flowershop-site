// src/components/Practice/index.js
import React from 'react';
import './style.css';
import { Menu } from "../../components/Menu";
import practiceTitle from '../../assets/Practice-Title.svg';
import reverseflowerBg from '../../assets/reverseflowerbg.png';
import projectsData from '../../projectsData';
import practicebox from '../../assets/practicebox.svg';

export const Practice = () => {
  return (
    <div className="practice-page" style={{ backgroundImage: `url(${reverseflowerBg})` }}>
      <Menu currentPage="PRACTICE" />
      <img src={practiceTitle} alt="Practice Title" className="practice-title" />
      <div className="practice-content">
        {projectsData.map((project, i) => (
          <div className="project-box" >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-text">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-date">{project.date}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};