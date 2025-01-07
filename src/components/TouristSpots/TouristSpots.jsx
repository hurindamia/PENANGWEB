import React from "react";
import "./TouristSpots.css";

const TouristSpots = () => {
  const spots = [
    {
      name: "Penang Hill",
      image: "/images/penang-hill.jpg",
    },
    {
      name: "Kek Lok Si Temple",
      image: "/images/kekloksi_temple.jpg",
    },
    {
      name: "George Town Heritage Area",
      image: "/images/gtwn1.jpg",
    },
    {
      name: "Penang National Park",
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
        </div>
      ))}
    </div>
  );
};

export default TouristSpots;

