import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About {' '}<span className='span-color'>Us</span> </h3>
          <p>
            We are a company that aims to provide the best quality services to
            our customers.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick <span className='span-color'>Links</span></h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact{' '}<span className='span-color'>Us</span></h3>
          <p>
            Lumpson Street, Newton Limbe
            <br />
            Phone: +237689906756  <br />
            Email: info@company.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>@copyright 2024 V&C {' '}<span className='span-color'>Rentals</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;