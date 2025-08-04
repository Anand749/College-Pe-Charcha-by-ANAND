import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-[#fff7ef] border-b border-yellow-300 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-900">  Techz DADA</div>
        <div className="hidden md:flex space-x-4">
          <a href="predictor.html" className="text-gray-700 hover:text-orange-500 transition hover:underline hover:scale-105"><b>Predict College</b></a>
          <a href="#" className="text-gray-700 hover:text-orange-500 transition hover:underline hover:scale-105"><b>College List</b></a>
          <a href="#" className="text-gray-700 hover:text-orange-500 transition hover:underline hover:scale-105"><b>About</b></a>
          <a href="#" className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-4 py-1.5 rounded-full font-medium shadow-md hover:opacity-90 transition hover:scale-105"><b>Contact Us</b></a>
        </div>
        <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 py-4 bg-[#fff7ef] border-t border-yellow-200 animate-fade-in-down">
          <a href="#" className="text-gray-700 hover:text-orange-500 transition text-lg hover:scale-105"><b>Predict College</b></a>
          <a href="#" className="text-gray-700 hover:text-orange-500 transition text-lg hover:scale-105"><b>College List</b></a>
          <a href="#" className="text-gray-700 hover:text-orange-500 transition text-lg hover:scale-105"><b>About</b></a>
          <a href="#" className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-4 py-1.5 rounded-full font-medium shadow-md hover:opacity-90 transition text-lg hover:scale-105"><b>Contact Us</b></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
