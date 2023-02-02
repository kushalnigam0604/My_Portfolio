import React from "react";
import "./Header.css";
import CTA from './CTA';
import myImage from '../../assets/myImage.jpg';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kushal Nigam</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="myImage">
          <img src={myImage} alt="" />
        </div>
        <a href="#contact" className="scroll__down">Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
