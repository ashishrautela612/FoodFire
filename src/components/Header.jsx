import React from "react";
import "../styles/header.css"
import { logoImage } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={logoImage}
          alt="logo"
          className="logoImage"
        />
      </div>
      <div className="navBar">
        <ul className="navItems">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>🛒</li>
          <li>Login</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
