import React from "react";
import "../styles/TopColleges.css";
import Autoplay from "embla-carousel-autoplay";


const colleges = [
  {
    name: "VIT Pune",
    image: "/images/vit-pune.jpg",
    link: "/colleges/vit-pune"
  },
  {
    name: "VIIT Pune",
    image: "/images/viit.jpg",
    link: "/colleges/viit"
  },
  {
    name: "MIT-WPU",
    image: "/images/mit.jpg",
    link: "/colleges/mit-wpu"
  },
  {
    name: "PCCOE",
    image: "/images/pccoe.jpg",
    link: "/colleges/pccoe"
  },
  {
    name: "COEP",
    image: "/images/coep.jpg",
    link: "/colleges/coep"
  },
  // Add more colleges here...
];

const TopColleges = () => {
  return (
    <div className="top-colleges-container">
      <h2 className="section-title">Explore Top Colleges</h2>

      <Carousel
        plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
        className="carousel-wrapper"
      >
        <CarouselContent>
          {colleges.map((college, index) => (
            <CarouselItem key={index} className="college-slide">
              <div className="college-card">
                <img src={college.image} alt={college.name} className="college-image" />
                <div className="college-info">
                  <h3>{college.name}</h3>
                  <a href={college.link}>
                    <button className="explore-btn">Explore</button>
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TopColleges;
