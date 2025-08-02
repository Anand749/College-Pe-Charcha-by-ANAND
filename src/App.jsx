import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import TrustedBySection from "./components/TrustedBySection";
import Carousel from "./components/Carousel";
import WhatsAppSection from "./components/WhatsAppSection"; // ✅ Import it
import ModelCollegeList from "./components/sections/ModelCollegeList"; // ✅ Import ModelCollegeList
import Review from "./components/sections/Review";
import Team from "./components/sections/Team";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <TrustedBySection />
      <Carousel />
      <WhatsAppSection /> {/* ✅ Add here */}
       <ModelCollegeList />
       <Review />
       <Team />
    </>
  );
}

export default App;
