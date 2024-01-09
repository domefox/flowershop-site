import React from "react";
import "./style.css";
import weberw from '../../assets/weberw.svg';
import { Link } from 'react-router-dom';


export const Menu = ({ className, currentPage }) => {
  return (
    <div className={`menu-bar ${className}`}>
      <img src={weberw} alt="Weberw" className="weberw-logo" />
      <div className="menu-items">
        <Link to="/" className={`HOME ${currentPage === 'HOME' ? 'current' : ''}`}>{currentPage === 'HOME' ? '> ' : ''}HOME</Link>
        <Link to="/theory" className={`THEORY ${currentPage === 'THEORY' ? 'current' : ''}`}>{currentPage === 'THEORY' ? '> ' : ''}THEORY</Link>
        <Link to="/practice" className={`PRACTICE ${currentPage === 'PRACTICE' ? 'current' : ''}`}>{currentPage === 'PRACTICE' ? '> ' : ''}PRACTICE</Link>      </div>
    </div>
  );
};