import React from "react"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Penang Explorer</div>
      <ul className="nav-links">
        <li><a href="#home" className="nav-item">Homi</a></li>
        <li><a href="#tourist-spots" className="nav-item">Tourist Spots</a></li>
        <li><a href="#foods" className="nav-item">Foods</a></li>
        <li><a href="#hotels" className="nav-item">Hotels</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

