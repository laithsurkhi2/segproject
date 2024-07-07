// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-backgroundColor p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-black text-2xl font-bold">Health</Link>
        <Link to="/" className="text-orange-500 text-2xl font-bold">Time</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="bg-orange-500 text-black py-2 px-4 rounded">Home</Link>
        <Link to="/services" className="bg-orange-500 text-black py-2 px-4 rounded">Services</Link>
        <Link to="/team" className="bg-orange-500 text-black py-2 px-4 rounded">Team</Link>
        <Link to="/blogs" className="bg-orange-500 text-black py-2 px-4 rounded">Blog</Link>
        
      </div>
      <div>
        <Link to="/appointment" className="bg-orange-500 hover:bg-blue-500  text-white py-2 px-4 rounded">Appointment</Link>
      </div>
    </nav>
  );
};

export default Navbar;
