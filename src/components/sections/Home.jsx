import React, { useState, useEffect, useRef } from "react";
import "../../styles/HeroSection.css";
import logo from "../../assets/logo.png";
import "../../styles/WhyChoose.css";
import "../../styles/TrustedBySection.css";
import "../../styles/Footer.css";
import { 
  FaInstagram, FaFacebookF, FaLinkedinIn, 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaWhatsapp, FaYoutube 
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import footerLogo from "../../assets/footerlogo.png";
import { CheckCircle, FileText, TrendingUp, Users, Star } from "lucide-react";

///NAV-BAR

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

 




// home-HERO SECTION

const HeroSection = () => {
  return (
    <div className="hero-container">
      
      <div className="circle-top-left" />
      <div className="circle-bottom-right" />

      <main className="hero-main container mx-auto px-4">
        <div className="flex justify-center mt-8 px-4">
          <div className="bridge-button">
            <span className="text-lg sm:text-xl">🎓</span>
            <span className="text-center leading-snug">
            Maharashtra's Only Non-Profit Student-led Initiative
            </span>
          </div>
        </div>
       <div className="hero-i1" />
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

////why choose 
const WhyChoose = () => {
  return (
    <section className="why-container">
      {/* Header */}
      <div className="why-header">
        <h2>
           <span className="high">Why Choose</span>   <span className="highlight">College Pe चर्चा</span>
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


///trusted by

 const stats = [
     { value: 12021, display: '12,000+', description: 'Trusted Visitors' },
     { value: 2562, display: '2,500+', description: 'Active Juniors' },
     { value: 123, display: '120+', description: 'Expert Seniors' },
 ];
 
 const TrustedBySection = () => {
     return (
         <section className="trusted-by-section">
             <div className="trusted-by-container">
                 {stats.map((stat, index) => (
                     <div className="trusted-by-card" key={index}>
                         {/* Use the CountUp component here */}
                         <CountUp
                             to={stat.value}
                             from={0} // Start counting from 0
                             duration={5} // Animation duration in seconds
                             delay={0.5} // Optional: delay before animation starts (e.g., 0.5 seconds)
                             className="number" // Apply the existing "number" class for styling
                             separator="," // Use a comma as a thousand separator
                             // You can add onStart, onEnd, etc., if needed
                         />
                         <div className="description">{stat.description}</div>
                     </div>
                 ))}
             </div>
         </section>
     );
 };
 
 
/////carousel

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


////whatsappp secctionn

const WhatsAppSection = () => {
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', padding: '40px' }}>
      <Card
        heading={<div className="t1">Join Our WhatsApp Community</div>}
        text="Connect instantly with peers, mentors, and college seniors. Get real-time updates, ask questions, and be part of a vibrant student community!"
        buttonText="Join WhatsApp"
        link="https://chat.whatsapp.com/HbLY6umdG2G5jKfeRIfbxf"
        extras="🚀 Fast answers • 🤝 Peer support • 🆓 Free to join"
      />
      <Card


        heading={<div className="t1">Connect On YouTube  </div>}
        text="Get insights, tutorials, and expert advice on college admissions and career paths directly from our team on the Techz DADA YouTube channel.
                                                    
        "
        buttonText="Subscribe"
        link="https://youtube.com/@techzdada1103?si=daKmsT95yQi50d-d"
        extras="🎥 Video Guides • 💬 Live Q&A • 🔔 Stay Updated"
      />
    </div>
  );
};

 ///model list.jsx

 const features = [
   {
     icon: FileText,
     title: 'Comprehensive Lists',
     desc: 'Region-specific lists tailored to your percentile and preferences.',
   },
   {
     icon: TrendingUp,
     title: 'Data-Driven Insights',
     desc: 'Cutoff trends & placement analytics help you make informed choices.',
   },
   {
     icon: Users,
     title: 'Peer Guidance',
     desc: 'Insights and advice from students who’ve been through it.',
   },
 ];
 
 const benefits = [
   'Detailed list for Mumbai & Pune regions',
   'Based on past CAP round data',
   'Personalized for 85+ percentile',
   'Preference list ready for CAP',
   'Cutoff trend analysis (3 years)',
   'Placement stats by branch',
   'Senior reviews and tips',
   'WhatsApp support during CAP',
 ];
 
 const ModelCollegeList = () => {
   return (
     <div className="model-wrapper bg-[#fff7f2] px-6 md:px-12 py-12 max-w-7xl mx-auto rounded-3xl shadow-xl">
       <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
         
         {/* Left Section */}
         <div className="md:w-1/2 space-y-6">
           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
             Why Choose Our <span className="text-orange-600">Model List?</span>
           </h2>
           <p className="text-gray-700 text-base md:text-lg">
             Our Model College List is crafted for high-achieving students aiming for top colleges. It combines data-backed insights and real student experiences to help you make confident choices.
           </p>
 
           <div className="space-y-5">
             {features.map(({ icon: Icon, title, desc }, idx) => (
               <div key={idx} className="flex items-start gap-4">
                 <div className="bg-orange-100 text-orange-600 p-3 rounded-xl shadow-sm">
                   <Icon className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
                   <p className="text-sm text-gray-600">{desc}</p>
                 </div>
               </div>
             ))}
           </div>
            
           <div className="bg-orange-50 p-5 rounded-xl mt-6 text-sm text-gray-700 shadow-sm">
             <h4 className="font-semibold mb-3 text-gray-900 text-base">What You Get:</h4>
             <ul className="list-disc ml-5 space-y-1">
               <li>Excel sheet with 50+ colleges ranked by preference</li>
               <li>Branch-wise cutoff predictions for current year</li>
               <li>Detailed college profiles with pros and cons</li>
               <li>CAP round strategy guide</li>
               <li>
                 Direct <span className="text-green-600 font-semibold">WhatsApp</span> access to our mentors
               </li>
             </ul>
           </div>
         </div>
          
 
         {/* Right Section */}
         <div className="md:w-1/2 max-w-md relative">
           <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
             <span className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
               Most Popular
             </span>
 
             <h3 className="text-2xl font-bold text-center text-gray-900">Model College List</h3>
             <p className="text-sm text-gray-600 text-center mt-1 mb-4">
               Complete guidance for high-percentile students
             </p>
 
             <div className="text-center text-4xl font-extrabold text-orange-600 mb-4">
               ₹199 <span className="text-base text-gray-500 font-normal">one-time</span>
             </div>
 
             <ul className="space-y-3 text-sm text-gray-700">
               {benefits.map((item, idx) => (
                 <li key={idx} className="flex items-start gap-2">
                   <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
 
            <a
   href="https://forms.gle/d9wmHh3dSMvNLS1w9"
   target="_blank" 
   rel="noopener noreferrer"
   className="w-full block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 mt-6 rounded-xl shadow-sm transition-all duration-200 hover:scale-[1.02]"
 >
   Get Your Model List
 </a>
             <p className="text-xs text-gray-500 text-center mt-3">
               Perfect for students targeting top colleges in Mumbai & Pune
             </p>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
  
 
//Reviews
const reviews = [
  {
    name: "Anway Shimpne",
    review: "Through CollegePecharcha’s WhatsApp groups, I got to talk directly with seniors from different colleges. They cleared all my doubts honestly and shared real experiences. It felt like having a mentor throughout the process. Totally worth it! Plus, that marketing reel through which I reached here was also too good .🙌🙌 Great idea, great execution, and great collaboration. I hope to see your team in VIT soon!",
  },
  {
    name: "Rohan Deshmukh",
    review: "Amazing support from seniors. Loved the hackathons and events!",
  },
  {
    name: "Sneha Kulkarni",
    review: "I found my dream career thanks to the placement cell at VIT Pune.",
  },
   {
    name: "Sneha Kulkarni",
    review: "I found my dream career thanks to the placement cell at VIT Pune.",
  }, {
    name: "Sneha Kulkarni",
    review: "I found my dream career thanks to the placement cell at VIT Pune.",
  }, {
    name: "Sneha Kulkarni",
    review: "I found my dream career thanks to the placement cell at VIT Pune.",},
   {
    name: "Sneha Kulkarni",
    review: "I found my dream career thanks to the placement cell at VIT Pune.",
  },
];

const Review = () => {
  return (
    
    <div className="relative w-full bg-[#fff7f2] py-12 overflow-hidden">
      {/* Scrolling container */}
      <div className="text-center mb-10">
  <h2 className="text-3xl font-bold text-gray-800">What Our Students Say</h2>
  <p className="text-lg text-gray-600 mt-2">
    Real stories from real students who achieved their college dreams with our guidance.
  </p>
</div>

      <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] px-6">
    
        {[...reviews, ...reviews].map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm h-64 bg-white shadow-xl rounded-2xl p-5 flex flex-col justify-between border border-orange-200 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="text-orange-600 text-xl font-semibold">{item.name}</div>
            <p className="text-gray-600 text-sm mt-3 flex-1">{item.review}</p>
            <div className="flex gap-1 text-yellow-400 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#facc15" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Keyframes in tailwind */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <style>
        {`
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

 
///footer

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Main 4-Column Section */}
        <div className="footer-main">
          <div className="footer-column">
            <img src={footerLogo} alt="College pe Charcha Logo" className="logo" />
            <p>
              Maharashtra's only non-profit, student-led initiative helping thousands of students achieve their college dreams with accurate predictions and expert guidance.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/myself_techzdada11/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://chat.whatsapp.com/HbLY6umdG2G5jKfeRIfbxf" aria-label="Whatsapp"><FaWhatsapp /></a>
              <a href="https://youtube.com/@techzdada1103?si=lZ3JCFcVJptVLq7R" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/college-pe-charcha/" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading ">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">College Predictor</a></li>
              <li><a href="#">Top Colleges</a></li>
              <li><a href="#">Model List</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">College Prediction</a></li>
              <li><a href="#">Admission Guidance</a></li>
              <li><a href="#">Career Counseling</a></li>
              <li><a href="#">Hostel Information</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                 
                <FaMessage className="icon"></FaMessage>
                <span>collegepecharcha11@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <span>+91 7499957162</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
            <div className="newsletter-form">
              <h4 className="footer-heading" style={{fontSize: '1rem', marginBottom: '15px'}}>Stay Updated</h4>
              <input type="email" placeholder="Your email" />
              <button type="submit">Send Messege</button>
            </div>
          </div>
        </div>

      
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} College pe Charcha. All rights reserved. Made with <span className="love">♥</span> for Maharashtra students.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

 




// export { HeroSection, Navbar,WhyChoose,TrustedBySection,Carousel,WhatsAppSection,ModelCollegeList,Review,Footer };
export default Home;





