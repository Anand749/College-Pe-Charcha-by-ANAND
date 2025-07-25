import React from "react";
import "../styles/WhyChoose.css"; // optional if you want to style separately

const WhyChoose = () => {
  return (
    <section className="why-container">
      {/* Header */}
      <div className="why-header">
        <h2>
          Why Choose <span className="highlight">College Pe चर्चा</span>
        </h2>
        <p>
          We're more than just a platform – we're your bridge to informed college decisions
        </p>
      </div>

 
       <section className="why-container">
     

      <div className="why-grid">
        <div className="why-card">
          <div className="icon">👥</div>
          <h3>Direct Student Connect</h3>
          <p>Chat directly with Seniors from your dream colleges</p>
        </div>

        <div className="why-card">
          <div className="icon">💬</div>
          <h3>Real Experiences</h3>
          <p>Get authentic insights about college life, academics, and placements</p>
        </div>

        <div className="why-card">
          <div className="icon">🛡️</div>
          <h3>Verified Students</h3>
          <p>All our Seniors are verified with proper college credentials</p>
        </div>

        <div className="why-card">
          <div className="icon">📋</div>
          <h3>Percentile to College List</h3>
          <p>Get a curated list of colleges based on your entrance exam percentile</p>
        </div>
      </div>
    </section>

      
 
<section className="why-video-section py-16 px-4 md:px-12 bg-gradient-to-br from-[#e6e6e6] to-[#FFE7D6] dark:from-[#ffffff] dark:to-[#fbfbfb] transition-all duration-300 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
    
    {/* Left Text */}
    <div className="why-text space-y-5">
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800 dark:text-grey">
        What is <span className="text-[#FF6200] dark:text-[#FF6200]">College Pe चर्चा</span>
      </h2>
      <p className="text-gray-600 dark:text-black-300 text-lg leading-relaxed">
        Watch this video to understand how we're revolutionizing the way students make college decisions.
      </p>
    </div>

    {/* Right Video */}
    <div className="why-video w-full h-full">
      <div className="rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/y459gWKoaEw?si=NSgovpx8ZoMwJ5-_"
          title="CPC Intro"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>

    </section>
  );
};

export default WhyChoose;
