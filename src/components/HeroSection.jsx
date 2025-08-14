import React from "react";
import "../styles/HeroSection.css";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="circle-top-left" />
      <div className="circle-bottom-right" />

      <main className="hero-main">
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 px-4">
          <div className="bridge-button">
            <span className="text-lg sm:text-xl">🎓</span>
            <span className="text-center leading-snug">
              Maharashtra's Only Non-Profit Student-led Initiative
            </span>
          </div>
        </div>
        
        <img src={logo} alt="College Pe Charcha Logo" className="hero-logo" />

        <p className="hero-desc">
          Get real insights from Seniors, know the reality of college before you take Admission!
        </p>

        <div className="hero-buttons">
          <button className="btn-journey">
            Talk With Seniors <span className="text-xl">→</span>
          </button>
          <button className="btn-predict">🎓 Predict College</button>
          <button className="btn-predict">College List</button>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
