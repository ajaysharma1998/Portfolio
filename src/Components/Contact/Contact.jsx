import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="contact-wrapper" id='contact'>  
      <h1 className="contact-heading">Contact</h1> 
      <section id="contact" className="contact-section">
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p> Mumbai,Maharashtra, India</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>8286424617</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>ajaysharma23@navgurukul.org</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
