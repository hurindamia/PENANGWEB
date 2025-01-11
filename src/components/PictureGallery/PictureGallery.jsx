import React from "react";
import "./PictureGallery.css";

const images = [
  { src: "/images/penang-bridge.jpg", description: "Penang Bridge" },
  { src: "/images/penang4.jpg", description: "Penang Clock Tower" },
  { src: "/images/penang8.jpg", description: "Old Colonial Building" },
  { src: "/images/penang1.jpg", description: "Trishaw Ride" },
  { src: "/images/Ceramic.png", description: "Sila Studio Ceramic" },
  { src: "/images/penang3.jpg", description: "Street Art" },
  { src: "/images/penang5.jpg", description: "Peranakan Mansion" },
  { src: "/images/penang6.jpg", description: "Clan Jetty" },
  { src: "/images/Penanglittleindiaarch.jpg", description: "Little India" },
  { src: "/images/Kampung Agong.jpg", description: "Kampung Agong" },
  { src: "/images/komtar.jpg", description: "Komtar" },
  { src: "/images/entopia.jpg", description: "Entopia" },
];

const PictureGallery = () => {
  return (
    <section id="spots" className="picture-gallery">
      <h2>Discover Penang</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={image.src} alt={`Penang ${index + 1}`} />
              </div>
              <div className="flip-card-back">
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PictureGallery;
