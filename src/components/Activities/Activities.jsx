import React from "react";
import "./Activities.css";

const activities = [
  {
    name: "George Town Festival",
    description:
      "An annual celebration of art, culture, and heritage featuring performances, exhibitions, and workshops.",
    image: "/images/george-town-festival.jpg",
  },
  {
    name: "Penang International Food Festival",
    description:
      "A culinary extravaganza showcasing Penang's diverse food culture with events like food trails, cooking demos, and food truck rallies.",
    image: "/images/penang-food-festival.jpg",
  },
  {
    name: "Hiking at Penang Hill",
    description:
      "Enjoy breathtaking views and lush greenery as you explore the trails leading to Penang Hill.",
    image: "/images/hiking3.jpg",
  },
  {
    name: "Water Sports",
    description:
      "Thrill-seekers can indulge in jet skiing, parasailing, and banana boat rides at Penang's beaches.",
    image: "/images/watersport3.jpg",
  },
  {
    name: "Shopping at Night Bazaars",
    description:
      "Discover unique finds, local crafts, and delicious street food at Penang's vibrant night bazaars.",
    image: "/images/night-market.jpg",
  },
  {
    name: "Indoor Shopping at Queensbay Mall",
    description:
      "Penang's Largest, Longest and Most Modern Shopping Mall in Penang.",
    image: "/images/queensbay.jpg",
  },
];

function Activities() {
  return (
    <div className="app-body">
      <h1 className="main-title">Penang's Activities and Events</h1>
      <div className="activities-container">
        {activities.map((activity, index) => (
          <div className="activities-card" key={index}>
            <img
              src={activity.image}
              alt={activity.name}
              className="activities-image"
            />
            <div className="activities-content">
              <h2 className="activities-title">{activity.name}</h2>
              <p className="activities-description">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;

