import React from "react";
import "./style.css";
import flower from '../../assets/flower.png';
import stem from '../../assets/stem.svg';
import { ReactComponent as PracticePetal } from '../../assets/practicepetal.svg';
import { ReactComponent as TheoryPetal } from '../../assets/theorypetal.svg';
import flowershop from '../../assets/flowershop.svg';

export const Home = () => {
  return (
    <div className="home">
        <img className="flowershop" alt="Flowershop" src={flowershop} />
        <img className="flower" alt="Flower" src={flower} />
        <div className="stem-container">
        <img className="stem" alt="Stem" src={stem} />
        <PracticePetal className="practice-petal" />
        <TheoryPetal className="theory-petal" />
        </div>
    </div>
  );
};