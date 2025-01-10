// App.jsx
import React from 'react';
import Header from './components/Header';
import TouristSpots from './components/TouristSpots/TouristSpots';
import Food from './components/Food/Food';
import Hotels from './components/Hotels/Hotels';
import Footer from './components/Footer';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import PictureGallery from "./components/PictureGallery/PictureGallery";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Banner />
      <PictureGallery />
      <main>
        <TouristSpots />
        <Food />
        <Hotels />
      </main>
      <Footer />
    </div>
  );
};

export default App;