import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3><span role="img" aria-label="smile"></span> Ajay Sharma</h3>
        <p>
          I'm a frontend developer, specializing in React.js and responsive web design. A fast learner and proactive team player, dedicated to continuous improvement and tackling new challenges.
        </p>

        <h4>Connect with me</h4>
        <p>Stay updated and follow me on social media for the latest updates, projects, and insights! <span role="img" aria-label="sunflower">🌻</span></p>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/ajay-sharma-4ba9522bb/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ajaysharma1998" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <div className="footer-bottom">
          <p>Ajay's Portfolio © 2024 • <a href="/privacy">Privacy</a> • <a href="/terms">Terms</a></p>
          <a href="#top" className="back-to-top">Back to top <span>⬆</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
