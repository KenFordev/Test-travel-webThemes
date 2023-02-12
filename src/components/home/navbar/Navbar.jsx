import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header-con">
      <div className="logo-container">
        <Link to="/" className="logo-item">
          Home
        </Link>
      </div>
      <ul className="menu">
        <li className="menu-link">
          <Link to="/login" className="link-icons">
            Login
          </Link>
        </li>
        <li className="menu-link">
          <Link to="/register" className="link-icons">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
