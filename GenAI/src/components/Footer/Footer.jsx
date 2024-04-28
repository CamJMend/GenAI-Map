// src/components/Footer/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Wizeland</span> Inc.
          </h1>
          <p>
            Wizeland Inc. is a leading provider of AI technologies, dedicated to
            innovating how people interact with software & AI systems.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> &nbsp; 123-456-7890
            </span>
            <span>
              <i className="fas fa-envelope"></i> &nbsp; info@wizeland.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <br />
        </div>
      </div>
      <div className="footer-bottom">
        &copy; wizeland.com | Designed by Tec de Monterrey Team
      </div>
    </div>
  );
};

export default Footer;
