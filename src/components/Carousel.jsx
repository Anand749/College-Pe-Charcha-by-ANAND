
import React, { useState, useEffect } from 'react';
import "../styles/Carousel.css";

 
const imagesData = [
  // ... (your imagesData array remains the same)
  {
    src: './assests/assets/coep.webp', // Replace with your image URLs
    alt: 'COEP Pune Building',
    tag: 'Premier Engineering College',
    title: 'COEP Pune',
    location: 'Pune, Maharashtra',
    type: 'Engineering',
  },
  {
    src: '../assets/gmc.webp', // Replace with your image URLs
    alt: 'Government Medical College Pune Building',
    tag: 'Top Medical College',
    title: 'Government Medical College Pune',
    location: 'Pune, Maharashtra',
    type: 'Medical',
  },
  {
    src: 'https://via.placeholder.com/900x500/B2D8D8/FFFFFF?text=College+Image+3', // Replace with your image URLs
    alt: 'Mumbai University Building',
    tag: 'Leading Arts & Science',
    title: 'Mumbai University',
    location: 'Mumbai, Maharashtra',
    type: 'Arts & Science',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade transition

  const nextSlide = () => {
    setFade(false); // Start fade-out
    // The timeout below should ideally be slightly longer than the CSS transition duration
    // to ensure the fade-out completes before the image changes and fades in.
    // If your CSS transition is 0.7s, this should be >= 700ms.
    // However, for a 0.5s *wait*, we'll make the total cycle faster.
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesData.length);
      setFade(true); // Start fade-in for new slide
    }, 500); // Changed to 500ms to allow fade-out and new slide to appear quickly
  };

  const prevSlide = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + imagesData.length) % imagesData.length);
      setFade(true); // Start fade-in for new slide
    }, 570); // Changed to 500ms
  };

  // --- Auto-play functionality ---
  useEffect(() => {
    // Set the interval for auto-play to 700ms (0.7 seconds)
    const autoPlayInterval = setInterval(nextSlide, 700); // Change slide every 0.7 seconds (700ms)

    // Cleanup function
    return () => clearInterval(autoPlayInterval);
  }, [currentSlide]); // Dependency array: Restart interval when currentSlide changes

  const slide = imagesData[currentSlide];

  return (
    <div className="carousel-container">
      <img
        src={slide.src}
        alt={slide.alt}
        className={`carousel-image ${fade ? 'fade-in' : 'fade-out'}`}
      />

      <div className="carousel-overlay">
        <span className="carousel-tag">{slide.tag}</span>
        <h2 className="carousel-title">{slide.title}</h2>
        <p className="carousel-location">{slide.location}</p>
        <p className="carousel-type">{slide.type}</p>
      </div>

      <button onClick={prevSlide} className="carousel-nav-button left">
        &lt;
      </button>
      <button onClick={nextSlide} className="carousel-nav-button right">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;