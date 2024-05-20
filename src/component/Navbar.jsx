import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SiTodoist } from "react-icons/si";
import "./Navbar.css";
function Navbar() {
  return (
   
      <nav>
        <Link className="navbar-brand" to="#">
          <b style={{ color: 'brown' }}><SiTodoist /> TODO</b>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
   
  );
}

export default Navbar;
