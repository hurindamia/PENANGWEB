import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <video autoPlay loop muted className="banner-video">
        <source src="/videos/ssstik.io_1736177130834.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <h1>Explore the Beauty of Penang</h1>
        <p>Immerse yourself in the vibrant culture, cuisine, and attractions of Penang.</p>
        <a href="#spots" className="btn-discover">Discover More</a>
      </div>
    </div>
  );
};

export default Banner;
