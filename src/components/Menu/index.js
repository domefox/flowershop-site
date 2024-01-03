import React from "react";
import "./style.css";
import weberw from '../../assets/weberw.svg';

export const Menu = ({ className, currentPage }) => {
  return (
    <div className={`menu-bar ${className}`}>
      <img src={weberw} alt="Weberw" className="weberw-logo" />
      <div className="menu-items">
        <div className={`HOME ${currentPage === 'HOME' ? 'current' : ''}`}>{currentPage === 'HOME' ? '> ' : ''}HOME</div>
        <div className={`THEORY ${currentPage === 'THEORY' ? 'current' : ''}`}>{currentPage === 'THEORY' ? '> ' : ''}THEORY</div>
        <div className={`PRACTICE ${currentPage === 'PRACTICE' ? 'current' : ''}`}>{currentPage === 'PRACTICE' ? '> ' : ''}PRACTICE</div>
      </div>
    </div>
  );
};