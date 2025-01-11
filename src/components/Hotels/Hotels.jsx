import React from "react";
import "./Hotels.css";

const hotels = [
  {
    name: "Eastern & Oriental Hotel",
    description:
      "A historic hotel with British colonial charm, offering luxurious suites and modern amenities. Prices: RM700–RM1,400 per night.",
    image: "/images/eastern-oriental.jpg",
  },
  {
    name: "Shangri-La's Rasa Sayang Resort",
    description:
      "A historic hotel with British colonial charm, offering luxurious suites and modern amenities. Prices: RM700–RM1,400 per night.",
    image: "/images/shangrila.jpg",
  },
  {
    name: "G Hotel Gurney",
    description:
      "A stylish urban oasis perfect for business or leisure stays, with stunning city or sea views. Prices: RM450–RM900 per night.",
    image: "/images/g-hotel1.jpeg",
  },
  {
    name: "Hard Rock Hotel Penang",
    description:
      "A vibrant, music-themed beachfront resort with fun amenities and entertainment. Prices: RM550–RM1,200 per night.",
    image: "/images/hardrockpng.jpg",
  },
  {
    name: "PARKROYAL Penang Resort",
    description:
      "A tropical beachfront resort offering a relaxing escape with family-friendly facilities. Prices: RM500–RM1,000 per night.",
    image: "/images/parkroyal.jpg",
  },
];

function Hotels() {
  return (
    <div className="app-body">
      <h1 className="main-title">Top Hotels in Penang</h1>
      <div className="hotels-container">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <div className="hotel-content">
                <h2 className="hotel-title">{hotel.name}</h2>
                <p className="hotel-description">{hotel.description}</p>
              </div>
            </div>
      ))}
    </div>
    </div>
  );
};
  

export default Hotels;

