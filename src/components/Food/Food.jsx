import React from "react";
import "./Food.css";

const foodData = [
  {
    name: "Char Kway Teow",
    description:
      "A popular stir-fried noodle dish with prawns, eggs, bean sprouts, and Chinese sausage, flavored with soy sauce and chili paste.",
    image: "/images/char-kway-teow.jpg",
  },
  {
    name: "Penang Laksa",
    description:
      "A tangy and spicy noodle soup made with tamarind, mackerel, and fresh herbs like mint and lemongrass, topped with a dollop of shrimp paste.",
    image: "/images/laksa_penang.jpg",
  },
  {
    name: "Nasi Kandar",
    description:
      "A flavorful rice dish served with a variety of rich curries, fried chicken, and vegetables, often enjoyed as a hearty meal.",
    image: "/images/nasikandar1.jpg",
  },
  {
    name: "Hokkien Mee",
    description:
      "A fragrant noodle soup featuring a savory broth made from prawns, pork, and spices, served with a mix of yellow noodles and rice vermicelli.",
    image: "/images/hokkienmee1.jpeg",
  },
  {
    name: "Pasembur",
    description:
      "Pasembur is a flavorful Malaysian salad packed with crispy fritters, fresh vegetables, and rich peanut sauce.",
    image: "/images/pasembur.jpg",
  },
];

function Food() {
  return (
    <div className="app-body">
      <h1 className="main-title">Must-Try Foods in Penang</h1>
      <div className="food-container">
        {foodData.map((food, index) => (
          <div className="food-card" key={index}>
            <img src={food.image} alt={food.name} className="food-image" />
            <div className="food-content">
              <h2 className="food-title">{food.name}</h2>
              <p className="food-description">{food.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
