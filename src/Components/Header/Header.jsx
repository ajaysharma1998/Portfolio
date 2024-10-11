import React from 'react';
import { Link } from 'react-scroll'; 
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"> Ajay Sharma</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70}>About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
