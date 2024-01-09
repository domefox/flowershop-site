import React from 'react';
import './style.css';
import { Menu } from "../../components/Menu";
import theoryTitle from '../../assets/Theory-Title.svg';
import flowerBg from '../../assets/flowerbg.png';

export const Theory = () => {
  return (
    <div className="theory-page" style={{ backgroundImage: `url(${flowerBg})` }}>
      <Menu currentPage="THEORY" />
      <img src={theoryTitle} alt="Theory Title" className="theory-title" />
      <div className="theory-content">
        <p>Technology is natural;<br></br>
        we made fire & fire made humanity.</p>
        <p>Technology should feel natural,<br></br>
        like flowers in the springtime.</p>
        <p>Technology should be beautiful;<br></br>
        beauty is inherently good.</p>
        <p>Most can only buy beauty or be beautiful;<br></br>
        we should all be able to create beauty</p>
      </div>
    </div>
  );
};