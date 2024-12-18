import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/images/icons/instagram.png";
import threads from "../assets/images/icons/threads.png";
import facebook from "../assets/images/icons/facebook.png";
import linkedin from "../assets/images/icons/linkedin.png";
import youtube from "../assets/images/icons/youtube.png";
import twitter from "../assets/images/icons/twitter.png";
import "./Footer.css";

function Footer(){
  return(
    <div className="footer">
      <ul className="footer-menu">
        <li className="footer-item">
          <Link to="https://www.instagram.com/mithibaiculturalcommittee" target="_blank" rel="noopener noreferrer" className="footer-links">
            <img src={instagram} alt="Instagram"></img>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="https://www.threads.net/@mithibaiculturalcommittee" target="_blank" rel="noopener noreferrer" className="footer-links">
            <img src={threads} alt="Threads"></img>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="https://www.facebook.com/mithibaiculturalcommittee" target="_blank" rel="noopener noreferrer" className="footer-links">
            <img src={facebook} alt="Facebook"></img>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="https://www.linkedin.com/company/mithibai-cultural-committee/" target="_blank" rel="noopener noreferrer" className="footer-links">
            <img src={linkedin} alt="LinkedIn"></img>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="https://www.youtube.com/@mithibaiculturalcommittee7736" target="_blank" rel="noopener noreferrer" className="footer-links">
            <img src={youtube} alt="YouTube"></img>
          </Link>
        </li>
        <li className="footer-item">
          <Link to="https://www.x.com" target="_blank" rel="noopener noreferrer" className="footer-links">
            <img src={twitter} alt="Twitter"></img>
          </Link>
        </li>
      </ul>
      
      
      <div className="footer-copyright-parent">
        <div className="footer-copyright">© Mithibai Cultural Committee.</div>
        <div className="footer-copyright">All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;  