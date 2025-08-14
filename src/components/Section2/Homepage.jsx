// src/pages/HomePage.jsx

import React from "react";
import Navbar from "../components/Navbar"; // Note the path change to ../
import HeroSection from "../components/HeroSection";
import WhyChoose from "../components/WhyChoose";
import TrustedBySection from "../components/TrustedBySection";
import Carousel from "../components/Carousel";
import WhatsAppSection from "../components/WhatsAppSection";
import ModelCollegeList from "../components/sections/ModelCollegeList";
import Review from "../components/sections/Review";
import Team from "../components/sections/Team";
import Footer from "../components/sections/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <TrustedBySection />
      <Carousel />
      <WhatsAppSection />
      <ModelCollegeList />
      <Review />
      <Team />
      <Footer /> 
    </>
  );
}

export default HomePage;