import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import TrustedBySection from "./components/TrustedBySection";
import TopColleges from "./components/TopColleges";
import CountUp from './components/CountUp'

function App() {
  return (
    <>
      <Navbar />
      
      <HeroSection />
      <WhyChoose />
      <TrustedBySection />
{/*        
      <TopColleges /> */}
    </>
  );
}

export default App;
