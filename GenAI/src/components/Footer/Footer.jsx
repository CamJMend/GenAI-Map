import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import "./Footer.css";
import image_logo_light from "../../assets/images/main_logo_black.png";
import image_logo_dark from "../../assets/images/main_logo_white_X1.png";

const Footer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={`footer ${state.theme === "light" ? "white" : ""}`}>
      <div className="footer-content">
        <div className="footer-section about">
          <img
            src={state.theme === "light" ? image_logo_light : image_logo_dark}
            alt="Logo negativo"
          />
          <p>
            Wizeline Inc. is a leading provider of AI technologies, dedicated to
            innovating how people interact with software & AI systems.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/githubai">GithubAI</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/licencias">Licensing</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> &nbsp; 123-456-7890
            </span>
            <span>
              <i className="fas fa-envelope"></i> &nbsp; info@Wizeline.com
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
      </div>
      <div className="footer-bottom">
        &copy; Wizeline.com | Designed by Tec de Monterrey Team
      </div>
    </div>
  );
};

export default Footer;


