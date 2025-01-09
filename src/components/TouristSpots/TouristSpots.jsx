import React from "react";
import "./TouristSpots.css";

const TouristSpots = () => {
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
    }, // Ensure there's no trailing comma after the last item
  ];

  return (
    <div id="tourist-spots" className="tourist-container">
      <h2 className="tourist-title">Must-Visit Tourist Spots in Penang</h2>
      {spots.map((spot, index) => (
        <div key={index} className="spot-section">
          <h3 className="spot-name">{spot.name}</h3>
          <div className="image-container">
            <img src={spot.image} alt={spot.name} className="spot-image" />
          </div>
          <p className="tourist-description">{spot.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TouristSpots;

