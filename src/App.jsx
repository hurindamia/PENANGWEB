import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TouristSpots from './components/TouristSpots';
import Food from './components/Food';
import Hotels from './components/Hotels';

const App = () => {
  return (
    <div>
      <Header />
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


