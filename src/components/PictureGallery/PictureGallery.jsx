import React from "react";
import "./PictureGallery.css";

const images = [
  "/images/penang-bridge.jpg",
  "/images/penang4.jpg",
  "/images/penang8.jpg",
  "/images/penang1.jpg",
  "/images/penang2.jpg",
  "/images/penang3.jpg",
  "/images/penang5.jpg",
  "/images/penang6.jpg",
  "/images/penang7.jpg",
];

const PictureGallery = () => {
  return (
    <section id="spots" className="picture-gallery">
      <h2>Discover Penang</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Penang ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PictureGallery;
