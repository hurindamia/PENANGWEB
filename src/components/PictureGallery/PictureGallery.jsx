import React from "react";
import "./PictureGallery.css";

const images = [
  { src: "/images/penang-bridge.jpg", name: "Penang Bridge", description: " A stunning cable-stayed bridge connecting Penang Island to the mainland, iconic for its engineering and scenic views."},
  { src: "/images/penang4.jpg", name: "Penang Clock Tower", description: "A historic clock tower built in 1897 to commemorate Queen Victoria's Diamond Jubilee, located near the waterfront." },
  { src: "/images/penang8.jpg", name: "Old Colonial Building", description: " Reflects Penang's British colonial past with its unique architecture, often found in George Town."},
  { src: "/images/penang1.jpg", name: "Trishaw Ride", description: "A traditional mode of transportation, offering a leisurely way to explore Penang's streets and cultural heritage."},
  { src: "/images/Ceramic.png", name: "Sila Studio Ceramic", description: "A place showcasing handmade ceramics, blending traditional and modern craftsmanship"},
  { src: "/images/penang3.jpg", name: "Street Art", description: "George Town's famous murals and interactive street art that depict local culture and life, a must-see for visitors."},
  { src: "/images/penang5.jpg", name: "Peranakan Mansion", description: " A museum that celebrates the unique Peranakan (Straits Chinese) culture, with intricate designs and artifacts."},
  { src: "/images/penang6.jpg", name: "Clan Jetty", description: "A collection of traditional stilt houses over the water, home to Penang's Chinese clans and a glimpse into their way of life."},
  { src: "/images/Penanglittleindiaarch.jpg", name: "Little India", description: " A vibrant neighborhood in George Town, filled with colorful shops, Indian restaurants, and cultural vibes."},
  { src: "/images/Kampung Agong.jpg", name: "Kampung Agong", description: "A scenic countryside area showcasing traditional Malay village life, with iconic coconut trees and paddy fields."},
  { src: "/images/komtar.jpg", name: "Komtar", description:"The tallest building in Penang, a hub for shopping, dining, and entertainment with panoramic views of the city."},
  { src: "/images/entopia.jpg", name: "Entopia", description: "A butterfly and insect sanctuary offering a nature-inspired experience, perfect for families and nature enthusiasts."},
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
                <p>{image.name}</p>
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
