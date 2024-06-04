import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { navLink } from "../../Data";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-container">
          <h1>
            V&C <span>Rentals</span>
          </h1>
        </div>
        <div className="links-container">
          <div>
          {
            navLink.map(link => (
          <div>
            <Link to={link.href}>{link.name}</Link>
          </div>
            ))
          }
         </div>
          <div className="contact">
            <Link to='/Contact'>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
