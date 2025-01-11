import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import PictureGallery from "./components/PictureGallery/PictureGallery";
<<<<<<< HEAD
import TouristSpots from "./components/TouristSpots/TouristSpots";
import Food from "./components/Food/Food";
import Hotels from "./components/Hotels/Hotels";
import Footer from "./components/Footer";
import AboutPenang from "./components/About/AboutPenang";
=======
import TouristSpots from './components/TouristSpots/TouristSpots';
import Food from './components/Food/Food';
import Hotels from './components/Hotels/Hotels';
import Activities from './components/Activities/Activities';
import Footer from './components/Footer';
>>>>>>> 0b4b7d4abf7f450d3dc2d076a9d8af5c25e67be1

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />

        {/* Main layout for the home page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Menu />
                <PictureGallery />
              </>
            }
          />

          {/* Layout for other pages */}
<<<<<<< HEAD
          <Route path="/tourist-spots" element={<TouristSpots />} />
          <Route path="/food" element={<Food />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/about" element={<AboutPenang />} />
=======
          <Route
            path="/tourist-spots"
            element={
              <>
                <TouristSpots />
              </>
            }
          />
          <Route
            path="/food"
            element={
              <>
                <Food />
              </>
            }
          />
          <Route
            path="/hotels"
            element={
              <>
                <Hotels />
              </>
            }
          />
          <Route
            path="/activities"
            element={
              <>
                <Activities />
              </>
            }
          />
>>>>>>> 0b4b7d4abf7f450d3dc2d076a9d8af5c25e67be1
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
