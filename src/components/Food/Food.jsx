import React from "react";
import "./Food.css";

const Food = () => {
  const foods = [
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

  return (
    <div id="foods" className="food-container">
      <h2 className="food-title">Must-Try Foods in Penang</h2>
      {foods.map((food, index) => (
        <div key={index} className="food-section">
          <h3 className="food-name">{food.name}</h3>
          <div className="image-container">
            <img src={food.image} alt={food.name} />
          </div>
          <p className="food-description">{food.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Food;

