import React from "react";
import "./Hotels.css";

const Hotels = () => {
  const hotels = [
    {
      name: "Eastern & Oriental Hotel",
      image: "/images/eastern-oriental.jpg",
    },
    {
      name: "Shangri-La's Rasa Sayang Resort",
      image: "/images/shangrila.jpg",
    },
    {
      name: "G Hotel Gurney",
      image: "/images/g-hotel1.jpeg",
    },
    {
      name: "Hard Rock Hotel Penang",
      image: "/images/hardrockpng.jpg",
    },
    {
      name: "PARKROYAL Penang Resort",
      image: "/images/parkroyal.jpg",
    },
  ];

  return (
    <div id="hotels" className="hotels-container">
      <h2 className="hotels-title">Top Hotels in Penang</h2>
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel-section">
          <h3 className="hotel-name">{hotel.name}</h3>
          <div className="image-container">
            <img src={hotel.image} alt={hotel.name} />
         </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
