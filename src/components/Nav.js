import React from "react";
import mainLogo from "../assets/logo/main-logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="container">
      <nav className="nav-custom">
        <div className="nav-main-logo">
          <img src={mainLogo} alt="" />
          Angkasa
        </div>
        <div className="nav-main-link">
          <input
            type="text"
            className="search-menu"
            placeholder={"Where you want to go ?"}
          />
          <a href="#">Find Ticket</a>
          <a href="#">My Booking</a>
        </div>
        <div className="nav-main-button">
          <button className="main-button">Sign Up</button>
          <button className="main-button">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
