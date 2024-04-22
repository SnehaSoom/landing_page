import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer"></div>
      <div className="footer-container"> 
        <div className="footer-item">
          <h3>Team</h3>
          <p>Lisa</p>
          <p>Danielle</p>
          <p>Bran</p>
        </div>
        <div className="footer-item">
          <h3>Learn More</h3>
          <p>Manifesto</p>
          <p>Works</p>
          <p>Story</p>
        </div>
        <div className="footer-item">
          <h3>Meet Us</h3>
          <p>Studio</p>
          <p>Community</p>
          <p>Workshops</p>
        </div>
        <div className="footer-item">
          <h3>Contact</h3>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
