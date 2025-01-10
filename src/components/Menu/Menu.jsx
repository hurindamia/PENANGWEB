import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const options = [
  { label: "Tourist Spots", icon: "🗺️", link: "/tourist-spots" },
  { label: "Food & Beverages", icon: "🍽️", link: "/food" },
  { label: "Hotels & Accommodation", icon: "🏨", link: "/hotels" },
  { label: "Activities & Events", icon: "🎾", link: "/activities" },
];

const Menu = () => {
  return (
    <div className="menu">
      {options.map((option, index) => (
        <Link to={option.link} key={index} className="menu-item">
          <span className="card-icon">{option.icon}</span>
          <span className="card-label">{option.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
