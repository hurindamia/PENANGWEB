// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="hero bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: 'url(/images/penang-bridge.jpg)' }}>
      <h1 className="text-4xl md:text-6xl font-bold">Penang, Malaysia</h1>
    </header>
  );
};

export default Header;