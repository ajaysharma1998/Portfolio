import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-wrapper"> {/* Add id attribute here */}
      <h1 className="skills-heading">Skills</h1> 
      <section className="skills-section">
        <div className="skills-container">
          <div className="skill-card">
            <FaHtml5 className="skill-icon html" />
            <h3>HTML</h3>
          </div>
          <div className="skill-card">
            <FaCss3Alt className="skill-icon css" />
            <h3>CSS</h3>
          </div>
          <div className="skill-card">
            <FaJsSquare className="skill-icon javascript" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-card">
            <FaReact className="skill-icon react" />
            <h3>React</h3>
          </div>
          <div className="skill-card">
            <SiTailwindcss className="skill-icon tailwind" />
            <h3>Tailwind CSS</h3>
          </div>
          <div className="skill-card">
            <SiBootstrap className="skill-icon bootstrap" />
            <h3>Bootstrap</h3>
          </div>
          <div className="skill-card">
            <FaCode className="skill-icon c" />
            <h3>C Language</h3>
          </div>
          <div className="skill-card">
            <SiMongodb className="skill-icon mongodb" />
            <h3>MongoDB</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;