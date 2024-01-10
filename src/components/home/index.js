import React from "react";
import "./style.css";
import flower from '../../assets/flower.png';
import stem from '../../assets/stem.svg';
import { ReactComponent as PracticePetal } from '../../assets/practicepetal.svg';
import { ReactComponent as TheoryPetal } from '../../assets/theorypetal.svg';
// import flowershop from '../../assets/flowershop.svg';
import { Menu } from "../../components/Menu";
import { FlowerShopLogo } from "../../components/FlowerShopLogo"


export const Home = () => {
  return (
    <div className="home">
        <FlowerShopLogo className="flowershop" /> 
        {/* <img className="flowershop" alt="Flowershop" src={flowershop} /> */}
        <img className="flower" alt="Flower" src={flower} />
        <img className="stem" alt="Stem" src={stem} />
        <PracticePetal className="practice-petal" />
        <TheoryPetal className="theory-petal" />
        <Menu className="menu-bar-instance" currentPage="HOME" />
    </div>
  );
};