// Header.js
import React, { useState } from 'react';
import profilePic from '../assets/myprofile.png';
 // Import sidebar styles

const Header = ({ onThemeToggle }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h1>Siddesh Mishra</h1>
          <h2>Computer Engineer</h2>
          <button id="theme-toggle" onClick={onThemeToggle}><i className="fas fa-adjust"></i></button>
          <button id="menu-toggle" className="sidebar-toggle" onClick={toggleSidebar}><i className="fas fa-bars"></i></button>
          <nav className="regular-nav">
            <ul>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="/my-portfolio">UI/UX</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <img src={profilePic} alt="Profile Pic" className="profile-pic" />
      </div>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <ul>
          <li><a href="#portfolio" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="/my-portfolio" onClick={toggleSidebar}>UI/UX</a></li>
          <li><a href="#resume" onClick={toggleSidebar}>Resume</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
