import React from "react";
// import { Group } from "./Group";
// import { MenuBar } from "./MenuBar";
import "./style.css";
import flower from '../../assets/flower.svg';
import stem from '../../assets/stem.svg';


export const Home = () => {
  return (
    <div className="home">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="flower" alt="Flower" src={flower} />
            <div className="practice-petal">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Practice</div>
              </div>
            </div>
            <div className="theory-petal">
              <div className="overlap-2">
                <div className="text-wrapper-5">Theory</div>
              </div>
            </div>
            <img className="stem" alt="Stem" src={stem} />
            <img className="flowershop" alt="Flowershop" src="flowershop.svg" />
          </div>
          {/* <MenuBar className="menu-bar-instance" />
          <Group className="group-6" /> */}
        </div>
      </div>
    </div>
  );
};