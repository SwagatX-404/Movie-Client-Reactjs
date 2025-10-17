import React, { useState } from "react";
import "./Header.css";
import mov from "./mov.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Left - Logo */}
      <div className="logo-section">
        <img src={mov} alt="Movie Logo" className="logo" />
        <h2 className="title">M◉VIES</h2>
      </div>

      {/* Hamburger (mobile) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Center + Right */}
      <div className="l-nav
      ">
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul className="nav-menu">
          <li>HOME</li>
          <li>MOVIES</li>
          <li>TV SHOWS</li>
        </ul>

        <div className="search-login">
          <div className="searchInput">
            <input className="inp" type="text" placeholder="Search" />
            <button className="searchButton">&#128269;</button>
          </div>
          <button className="login-btn">LOG IN</button>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Header;
