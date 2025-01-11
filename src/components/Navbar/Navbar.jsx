import React from "react"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Penang Explorer</div>
      <ul className="nav-links">
        <li><a href="/" className="nav-item">Home</a></li>
        <li><a href="#tourist-spots" className="nav-item">About Penang</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

