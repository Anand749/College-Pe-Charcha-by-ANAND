import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`w-full z-50 border-b py-2 sticky top-0 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#fff7ef] border-yellow-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <div className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Techz DADA</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/predictor" className={`transition hover:underline hover:scale-105 text-sm lg:text-base ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}><b>Predict College</b></Link>
          <Link to="#" className={`transition hover:underline hover:scale-105 text-sm lg:text-base ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}><b>College List</b></Link>
          <Link to="#" className={`transition hover:underline hover:scale-105 text-sm lg:text-base ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}><b>About</b></Link>
          <Link to="#" className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-3 sm:px-4 py-1.5 rounded-full font-medium shadow-md hover:opacity-90 transition hover:scale-105 text-sm lg:text-base"><b>Contact Us</b></Link>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-orange-100'}`}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle Button for Mobile */}
          <button 
            onClick={toggleTheme} 
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-orange-100'}`}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button 
            className={`flex items-center p-2 rounded-md transition-colors ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-orange-50 text-orange-500'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col items-center space-y-3 py-4 border-t animate-fade-in-down shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#fff7ef] border-yellow-200'}`}>
          <Link 
            to="/predictor" 
            className={`transition text-base font-medium py-2 px-4 rounded-md w-full text-center ${isDarkMode ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}
            onClick={() => setMenuOpen(false)}
          >
            <b>Predict College</b>
          </Link>
          <Link 
            to="#" 
            className={`transition text-base font-medium py-2 px-4 rounded-md w-full text-center ${isDarkMode ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}
            onClick={() => setMenuOpen(false)}
          >
            <b>College List</b>
          </Link>
          <Link 
            to="#" 
            className={`transition text-base font-medium py-2 px-4 rounded-md w-full text-center ${isDarkMode ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}
            onClick={() => setMenuOpen(false)}
          >
            <b>About</b>
          </Link>
          <Link 
            to="#" 
            className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-6 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition text-base mx-4"
            onClick={() => setMenuOpen(false)}
          >
            <b>Contact Us</b>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
