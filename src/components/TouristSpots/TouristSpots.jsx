import React from "react";
import "./TouristSpots.css";

const spots = [
  {
    name: "Penang Hill",
    description:
      "A scenic hill station offering panoramic views of George Town, lush greenery, and a cool retreat from the city’s heat. Enjoy attractions like The Habitat rainforest discovery and the historical funicular railway.",  
    image: "/images/penang-hill.jpg",
  },
  {
    name: "Kek Lok Si Temple",
    description:
      "One of Southeast Asia’s largest Buddhist temples, featuring stunning architecture, intricate carvings, and a towering statue of the Goddess of Mercy. A spiritual and cultural landmark.",
    image: "/images/kekloksi_temple.jpg",
  },
  {
    name: "George Town Heritage Area",
    description:
      "A UNESCO World Heritage Site known for its well-preserved colonial architecture, vibrant street art, and diverse cultural influences. Explore local markets, museums, and charming streets full of history.",
    image: "/images/gtwn1.jpg",
  },
  {
    name: "Penang National Park",
    description:
      "A UNESCO World Heritage Site known for its well-preserved colonial architecture, vibrant street art, and diverse cultural influences. Explore local markets, museums, and charming streets full of history.",
    image: "/images/penang-park1.jpg",
  },
  {
    name: "ESCAPE Penang",
    description:
      "Get ready for nonstop fun at ESCAPE Penang! With over 38 thrilling rides and attractions, it's the ultimate adventure destination in Malaysia.",
    image: "/images/escape1.jpg",
  },
  {
    name: "Batu Ferringhi Beach",
    description:
      "Most popular for its sandy beaches and it draws endless streams of tourist every year.",
    image: "/images/batuferringhi.jpg",
  }
];

function TouristSpots() {
  return (
    <div className="app-body">
      <h1 className="main-title">Explore Penang's Attractions</h1>
      <div className="spots-container">
        {spots.map((spot, index) => (
          <div className="spot-card" key={index}>
            <img src={spot.image} alt={spot.name} className="spot-image" />
            <div className="spot-content">
              <h2 className="spot-title">{spot.name}</h2>
              <p className="spot-description">{spot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TouristSpots;