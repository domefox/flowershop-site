// src/components/Practice/index.js
import React from 'react';
import './style.css';
import { Menu } from "../../components/Menu";
import { ProjectBox } from "../../components/ProjectBox";
import practiceTitle from '../../assets/Practice-Title.svg';
import reverseflowerBg from '../../assets/reverseflowerbg.png';
import projectsData from '../../projectsData';

export const Practice = () => {
    return (
      <div className="practice-page" style={{ backgroundImage: `url(${reverseflowerBg})` }}>
        <Menu currentPage="PRACTICE" />
        <img src={practiceTitle} alt="Practice Title" className="practice-title" />
        <div className="practice-content">
          {projectsData.map((project, i) => (
            <ProjectBox
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              boxImage={project.boxImage}
              date={project.date} 
            />
          ))}
        </div>
      </div>
    );
  };