import React from "react";
import Logo from '../assets/NetflixLogoBlack.png';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
        <button className="btn">Login</button>
    </nav>
  );
};

export default Nav;
