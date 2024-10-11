import React from 'react';
import './Project.css';
import flipkartImage from '../Image/image.png';
import cryptoImage from '../Image/Screenshot.png';
import taskImage from '../Image/homepage.png'; 

const Projects = () => {
  return (
    <div className="projects-wrapper" id='projects'>
      <h1 className="projects-heading">My Projects</h1>
      <section className="projects-section">
        
        <div className="project-item">
          <h2>Flipkart Clone</h2>
          <img 
            src={flipkartImage} 
            alt="Flipkart Clone Screenshot" 
            className="project-image" 
          />
          <a 
            href="https://flipcart-clone-seven.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Project
          </a>
        </div>

        <div className="project-item">
          <h2>Crypto Currency Tracker</h2>
          <img 
            src={cryptoImage}  
            alt="Crypto Currency Tracker Screenshot" 
            className="project-image" 
          />
          <a 
            href="https://crypto-currency-tracker-8wnp.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Project
          </a>
        </div>

        <div className="project-item">
          <h2>E-Commerce</h2>
          <img 
            src={taskImage}  
            alt="Task Management App Screenshot" 
            className="project-image" 
          />
          <a 
            href="https://appscrip-task-ajay-sharma.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit Project
          </a>
        </div>

      </section>
    </div>
  );
};

export default Projects;
