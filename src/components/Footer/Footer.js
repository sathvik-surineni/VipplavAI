import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div>
            <h3>Company</h3>
            <ul>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Our Mission</Link></li>
              <li><Link to="#">Tools</Link></li>
              <li><Link to="#">Blog</Link></li>
              <li><Link to="#">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3>Help Center</h3>
            <ul>
              <li><Link to="#">Discord Server</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">Facebook</Link></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Licensing</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="border-top flex">
          <p>&copy; 2024 Vipplav AI.</p>
          <div className="social-icons">
            <Link to="#"><BsFacebook size={24} /></Link>
            <Link to="#"><BsInstagram size={24} /></Link>
            <Link to="#"><BsTwitter size={24} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
