import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Moon, Sun, ArrowLeft, MapPin, Calendar, Users, ExternalLink, 
  MessageCircle, CheckCircle, FileText, TrendingUp, Star 
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import "../../styles/HeroSection.css";
import "../../styles/WhyChoose.css";
import "../../styles/TrustedBySection.css";
import "../../styles/Carousel.css";
import "../../styles/Team.css";
import "../../styles/Footer.css";
import "../../styles/Card.css";
import logo from "../../assets/logo.png";
import footerLogo from "../../assets/footerlogo.png";
// College images for the carousel
import coepImg from "../../assets/coep.webp";
import vjtiImg from "../../assets/vjti.jpg";
import pictImg from "../../assets/pict.webp";
import vitImg from "../../assets/vit.jpg";
import pccoeImg from "../../assets/pccoe.jpg";
import wceImg from "../../assets/wce.jpg";
// Team member images for college info
import anandImg from "../../assets/team1/anandImg.png";
import samarthImg from "../../assets/team1/samarthImg.jpg";
import vedantiImg from "../../assets/team1/vedantiImg.jpg";
// reverted: hero no longer needs individual images
import { 
  FaInstagram, FaLinkedinIn, 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaWhatsapp, FaYoutube, FaGithub, FaBehance 
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import CountUp from "../../components/CountUp";
// College Section Component (replaces Carousel)
// Sample college data (you can replace with your actual data)
const colleges = [
  {
    name: "COEP Technological University",
    address: "Wellesley Rd, Shivajinagar, Pune, Maharashtra 411005",
    image: coepImg
  },
  {
    name: "Veermata Jijabai Technological Institute",
    address: "H. R. Mahajani Rd, Matunga, Mumbai, Maharashtra 400019",
    image: vjtiImg
  },
  {
    name: "Pune Institute of Computer Technology",
    address: "Survey No. 27, Near Trimurti Chowk, Bharati Vidhyapith Campus, Pune",
    image: pictImg
  },
  {
    name: "Vishwakarma Institute of Technology",
    address: "Upper Indira Nagar, Bibwewadi, Pune, Maharashtra 411037",
    image: vitImg
  },
  {
    name: "Pimpri Chinchwad College of Engineering",
    address: "Sector 26, Pradhikaran, Nigdi, Pune, Maharashtra 411044",
    image: pccoeImg
  },
  {
    name: "Walchand College of Engineering",
    address: "Government Colony, Vishrambag, Sangli, Maharashtra",
    image: wceImg
  }
];

const CollegeSection = ({ onCollegeSelect }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    let isHovered = false;

    const scrollStep = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += 1.5;
        // Loop back to start for infinite scroll effect
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    // Pause on hover
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const handleExploreClick = (index) => {
    // Navigate to college detail page or handle as needed
    console.log(`Exploring college: ${colleges[index].name}`);
    onCollegeSelect(colleges[index]); // Pass the selected college to the parent
  };

  const displayColleges = [...colleges, ...colleges, ...colleges];

  return (
    <section className="py-10 md:py-16 px-2 md:px-4 bg-orange-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-800">
            Explore Top Colleges
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Scroll through and discover colleges. Connect with students and get
            real insights!
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 w-full overflow-x-auto md:overflow-x-hidden scrollbar-hide"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {displayColleges.map((college, idx) => (
              <div
                key={`${college.name}-${idx}`}
                className="min-w-[220px] sm:min-w-[260px] md:min-w-[280px] bg-white border border-orange-100 rounded-xl md:rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 flex flex-col group"
              >
                <div className="relative overflow-hidden rounded-t-xl md:rounded-t-2xl">
                  <img
                    src={`${college.image}`}
                    alt={college.name}
                    loading="lazy"
                    className="h-32 sm:h-40 md:h-44 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 line-clamp-1">
                    {college.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-5 flex-1 line-clamp-2 leading-relaxed">
                    {college.address}
                  </p>
                  <button
                    onClick={() => handleExploreClick(idx % colleges.length)}
                    className="mt-auto px-4 py-2 md:px-6 md:py-3 bg-[#f68014] rounded-lg md:rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced fade effects for light theme */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-orange-50 via-orange-50/80 to-transparent" />
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-orange-50 via-orange-50/80 to-transparent" />
        </div>
      </div>

      <style>{`
  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
    </section>
  );
};

// College Info Component
const CollegeInfo = ({ college, onBack }) => {
  const { isDarkMode } = useTheme();
  
  // Sample mentor data for each college
  const mentors = [
    {
      name: "Rahul Sharma",
      photo: anandImg,
      branch: "Computer Engineering",
      year: "3rd Year"
    },
    {
      name: "Priya Patel",
      photo: samarthImg,
      branch: "Information Technology",
      year: "4th Year"
    },
    {
      name: "Amit Kumar",
      photo: vedantiImg,
      branch: "Electronics & Telecommunication",
      year: "3rd Year"
    }
  ];

  // Get college data from colleges.json based on college name
  const getCollegeData = (collegeName) => {
    // This would ideally come from the colleges.json file
    // For now, using sample data that matches the structure
    const collegeData = {
      established: "1983",
      students: "2,500+",
      description: `${collegeName} is an autonomous renowned college known for its focus on computer science and related fields. It offers quality education in engineering and has a strong placement record, especially in the IT sector.`,
      programs: ["B.Tech", "M.Tech"],
      branches: [
        "Computer Engineering",
        "Information Technology", 
        "Electronics and Telecommunication Engineering",
        "Artificial Intelligence and Data Science",
        "Electronics and Computer Engineering"
      ],
      highlights: [
        "High Placement Rates",
        "Specialization in Computer Science",
        "Active Student Chapters",
        "Strong Alumni Network",
        "On-campus hostels are available"
      ],
      whatsappGroup: "https://chat.whatsapp.com/HbLY6umdG2G5jKfeRIfbxf"
    };
    return collegeData;
  };

  const collegeData = getCollegeData(college.name);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#111111]' : 'bg-gray-50'}`}>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button 
          onClick={onBack}
          className={`flex items-center gap-2 text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}
        >
          <ArrowLeft size={20} />
          Back to Colleges
        </button>
      </div>

      {/* College Banner */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img 
          src={college.image} 
          alt={college.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">{college.name}</h1>
          <p className="text-xl md:text-2xl mb-4">Pune</p>
          <div className="flex items-center gap-2 text-lg">
            <MapPin size={24} />
            <span>{college.address}</span>
          </div>
        </div>
      </div>

      {/* Key Information Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Established</p>
                <p className="text-2xl font-bold text-gray-900">{collegeData.established}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Students</p>
                <p className="text-2xl font-bold text-gray-900">{collegeData.students}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* About Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            {collegeData.description}
          </p>
        </div>

        {/* Programs Offered */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Programs Offered</h2>
          <div className="flex flex-wrap gap-3">
            {collegeData.programs.map((program, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {program}
              </span>
            ))}
          </div>
        </div>

        {/* Branches Offered */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Branches Offered</h2>
          <div className="flex flex-wrap gap-3">
            {collegeData.branches.map((branch, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {branch}
              </span>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h2>
          <ul className="space-y-3">
            {collegeData.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Meet Mentors from College */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left side - Text content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Mentors from College</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Connect with experienced mentors who are currently studying at this college. 
                Get first-hand insights about academics, campus life, and career opportunities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Direct access to current students</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time college updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Personalized guidance</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Mentor cards */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Meet the Mentors</h3>
                <div className="space-y-4">
                  {mentors.map((mentor, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-300 flex-shrink-0">
                          <img 
                            src={mentor.photo} 
                            alt={mentor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1 truncate">{mentor.name}</h4>
                          <p className="text-sm text-gray-600 mb-1 truncate">{mentor.branch}</p>
                          <p className="text-xs text-orange-600 font-medium">{mentor.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Student Community */}
        <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Student Community</h3>
            <p className="text-gray-600 mb-6">Connect with students, get tips, and stay updated with college news.</p>
            <a
              href={collegeData.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle size={20} />
              Join WhatsApp Group
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ image, heading, text, buttonText, link, extras }) => {
  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>{text}</p>
      <a href={link} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
      <div className="extras">{extras}</div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const handlePredictCollege = () => {
    navigate('/predictor');
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
         <nav className={`w-full z-50 border-b py-2 sticky top-0 transition-colors duration-300 ${isDarkMode ? 'bg-[#111111] border-gray-700' : 'bg-[#fff7ef] border-yellow-300'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <div className={`text-lg sm:text-xl font-semibold cursor-pointer transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`} onClick={() => navigate('/')}>
          Techz DADA
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <button onClick={handlePredictCollege} className={`transition hover:underline hover:scale-105 text-sm lg:text-base bg-transparent border-none cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}>
            <b>Predict College</b>
          </button>
          <button onClick={() => scrollToSection('model-college-list')} className={`transition hover:underline hover:scale-105 text-sm lg:text-base bg-transparent border-none cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}>
            <b>Get List</b>
          </button>
          <button onClick={() => scrollToSection('team-section')} className={`transition hover:underline hover:scale-105 text-sm lg:text-base bg-transparent border-none cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}>
            <b>Meet Our Team</b>
          </button>
          <a href="#" className={`transition hover:underline hover:scale-105 text-sm lg:text-base ${isDarkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-500'}`}><b>About</b></a>
          <a href="#" className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-3 sm:px-4 py-1.5 rounded-full font-medium shadow-md hover:opacity-90 transition hover:scale-105 text-sm lg:text-base"><b>Contact Us</b></a>
          
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
                 <div className={`md:hidden flex flex-col items-center space-y-3 py-4 border-t animate-fade-in-down shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-[#111111] border-gray-700' : 'bg-[#fff7ef] border-yellow-200'}`}>
          <button 
            onClick={handlePredictCollege}
            className={`transition text-base font-medium py-2 px-4 rounded-md w-full text-center bg-transparent border-none cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}
          >
            <b>Predict College</b>
          </button>
          <button 
            onClick={() => scrollToSection('model-college-list')}
            className={`transition text-base font-medium py-2 px-4 rounded-md w-full text-center bg-transparent border-none cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}
          >
            <b>Get List</b>
          </button>
          <button 
            onClick={() => scrollToSection('team-section')}
            className={`transition text-base font-medium py-2 px-4 rounded-md w-full text-center bg-transparent border-none cursor-pointer ${isDarkMode ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}
          >
            <b>Meet Our Team</b>
          </button>
          <a 
            href="#" 
            className={`transition text-base font-medium py-2 px-4 rounded-md w-full text-center ${isDarkMode ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}`}
            onClick={() => setMenuOpen(false)}
          >
            <b>About</b>
          </a>
          <a 
            href="#" 
            className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white px-6 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition text-base mx-4"
            onClick={() => setMenuOpen(false)}
          >
            <b>Contact Us</b>
          </a>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const navigate = useNavigate();

  const handlePredictCollege = () => {
    navigate('/predictor');
  };

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
            Talk With Seniors
          </button>
          <button className="btn-predict" onClick={handlePredictCollege}>🎓 Predict College</button>
          <button className="btn-predict">College List</button>
        </div>
      </main>
    </div>
  );
};

// Why Choose Component
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
  );
};

// What is College Pe Charcha Section
const WhatIsSection = () => {
  return (
    <section className="what-is-section">
      <div className="what-is-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          
          {/* Left Text */}
          <div className="what-is-text space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800 dark:text-grey">
              What is <span className="text-[#FF6200] dark:text-[#FF6200]">College Pe चर्चा</span>
            </h2>
            <p className="text-gray-600 dark:text-black-300 text-lg leading-relaxed">
              Watch this video to understand how we're revolutionizing the way students make college decisions.
            </p>
          </div>

          {/* Right Video */}
          <div className="what-is-video w-full h-full">
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
      </div>
    </section>
  );
};

// Trusted By Section Component
const stats = [
  { value: 12021, display: '12,000+', description: 'Trusted Visitors' },
  { value: 2562, display: '2,500+', description: 'Active Juniors' },
  { value: 123, display: '120+', description: 'Expert Seniors' },
];

const TrustedBySection = () => {
  return (
    <section className="trusted-by-section">
      <div className="trusted-by-container">
        <div className="trusted-by-header">
          <h2 className="trusted-by-title">Trusted by Students Across Maharashtra</h2>
          <p className="trusted-by-subtitle">Join thousands of students who trust us for their college decisions</p>
        </div>
        <div className="trusted-by-stats">
          {stats.map((stat, index) => (
            <div className="trusted-by-card" key={index}>
              <CountUp
                to={stat.value}
                from={0}
                duration={5}
                delay={0.5}
                className="number"
                separator=","
              />
              <div className="description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Review Component
const reviews = [
  {
    name: "Anway Shimpne",
    review: "Through CollegePecharcha's WhatsApp groups, I got to talk directly with seniors from different colleges. They cleared all my doubts honestly and shared real experiences. It felt like having a mentor throughout the process. Totally worth it! Plus, that marketing reel through which I reached here was also too good .🙌🙌 Great idea, great execution, and great collaboration. I hope to see your team in VIT soon!",
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
    name: "Priya Sharma",
    review: "The guidance I received helped me choose the perfect college for my career goals.",
  },
  {
    name: "Amit Patel",
    review: "Excellent platform for connecting with seniors and getting real insights about colleges.",
  },
  {
    name: "Neha Singh",
    review: "The WhatsApp community is incredibly helpful and supportive.",
  },
];

const Review = () => {
  const { isDarkMode } = useTheme();
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    let isHovered = false;

    const scrollStep = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += 1.5;
        // Loop back to start for infinite scroll effect
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    // Pause on hover
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <div className={`relative w-full py-12 overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-[#111111]' : 'bg-[#fff7f2]'}`}>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>What Our Students Say</h2>
        <p className={`text-lg mt-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Real stories from real students who achieved their college dreams with our guidance.
        </p>
      </div>

      {/* Centered container with margins */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Scrolling container with auto-scroll */}
        <div 
          ref={scrollRef}
          className="flex gap-6 w-max mx-auto overflow-x-auto scrollbar-hide"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm h-64 shadow-xl rounded-2xl p-5 flex flex-col justify-between border hover:scale-105 transition-transform duration-300 ease-in-out bg-white border-orange-200"
            >
              <div className="text-orange-600 text-xl font-semibold">{item.name}</div>
              <p className="text-sm mt-3 flex-1 text-gray-600">{item.review}</p>
              <div className="flex gap-1 text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#facc15" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced fade effects */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-[#fff7f2] via-[#fff7f2]/80 to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-[#fff7f2] via-[#fff7f2]/80 to-transparent" />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

// Team Component
const teamMembers = [
  {
    name: 'Anand Chapke',
    role: 'Founder & Lead',
    education: "VIT Pune - Information Technology",
    description: 'Passionate about helping students achieve their dreams. Built this platform to democratize college guidance.',
    img: '/src/assets/team1/anandImg.png',
    socials: {
      instagram: 'https://www.instagram.com/myself_techzdada11/',
      linkedin: 'https://www.linkedin.com/in/anand-chapke-623930281/',
      youtube: 'https://youtube.com/@techzdada1103?si=lZ3JCFcVJptVLq7R',
      whatsapp: 'https://chat.whatsapp.com/HbLY6umdG2G5jKfeRIfbxf'
    }
  },
  {
    name: 'Samarth Dhagate',
    role: 'Operations Lead',
    education: 'VIT Pune - Information Technology',
    description: 'Manages platform logistics and streamlines our processes to ensure a smooth and efficient experience for every student.',
    img: '/src/assets/team1/samarthImg.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/samarth-dhagate-187b46320/?originalSubdomain=in',
    }
  },
  {
    name: 'Vedanti Raut',
    role: 'Marketing Lead',
    education: 'VIT Pune - Computer Science(AI)',
    description: 'Connects with students across Maharashtra, spreading awareness of our mission and building our community through strategic outreach.',
    img: '/src/assets/team1/vedantiImg.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/vedanti-raut-b067a6329/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in',
    }
  },
  {
    name: 'Rahul Sharma',
    role: 'Technical Lead',
    education: 'COEP Pune - Computer Engineering',
    description: 'Expert in web development and technical architecture. Ensures our platform runs smoothly and efficiently.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=R',
    socials: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Priya Patel',
    role: 'Content Lead',
    education: 'PICT Pune - Information Technology',
    description: 'Creates engaging content and manages our social media presence to reach more students.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=P',
    socials: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Amit Kumar',
    role: 'Data Analyst',
    education: 'VJTI Mumbai - Computer Science',
    description: 'Analyzes college data and trends to provide accurate predictions and insights.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=A',
    socials: {
      linkedin: '#'
    }
  },
  {
    name: 'Neha Singh',
    role: 'Student Relations',
    education: 'SPIT Mumbai - Information Technology',
    description: 'Builds relationships with students and colleges to expand our network.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=N',
    socials: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Vikram Mehta',
    role: 'Event Coordinator',
    education: 'DJSCE Mumbai - Computer Engineering',
    description: 'Organizes events, workshops, and webinars to connect students with industry experts.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=V',
    socials: {
      linkedin: '#'
    }
  },
  {
    name: 'Sneha Desai',
    role: 'Community Manager',
    education: 'KJSCE Mumbai - Information Technology',
    description: 'Manages our WhatsApp communities and ensures smooth communication between members.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=S',
    socials: {
      whatsapp: '#',
      instagram: '#'
    }
  },
  {
    name: 'Arjun Reddy',
    role: 'Research Lead',
    education: 'VIT Pune - Computer Science',
    description: 'Conducts research on college trends and admission patterns to improve our predictions.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=A',
    socials: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Kavya Iyer',
    role: 'Design Lead',
    education: 'MIT Pune - Computer Engineering',
    description: 'Creates beautiful and intuitive user interfaces to enhance user experience.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=K',
    socials: {
      linkedin: '#',
      behance: '#'
    }
  },
  {
    name: 'Rohan Gupta',
    role: 'Quality Assurance',
    education: 'PES Pune - Information Technology',
    description: 'Ensures the quality and accuracy of all our predictions and recommendations.',
    img: 'https://via.placeholder.com/120x120/FF6A3D/FFFFFF?text=R',
    socials: {
      linkedin: '#'
    }
  }
];

const Team = () => {
  const { isDarkMode } = useTheme();
  const [showAllMembers, setShowAllMembers] = useState(false);
  
  const displayedMembers = showAllMembers ? teamMembers : teamMembers.slice(0, 3);

  return (
    <section className="team-section">
      <div className="team-container">
        
        {/* Header */}
        <header className="team-header">
          <h2> <span className='meet' >Meet Our</span>  <span className="highlight">Dedicated Team</span></h2>
          <p> <span className='m1'>Student leaders from top Maharashtra colleges who are passionate about helping the next generation succeed.</span> </p>
        </header>

        <div className="team-grid">
          {displayedMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-photo-wrapper">
                <img src={member.img} alt={member.name} className="team-photo" />
                <div className="role-badge">{member.role}</div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-education">{member.education}</p>
              <p className="team-desc">{member.description}</p>

              {/* Socials Section */}
              <div className="team-socials">
                {member.socials.instagram && (
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                )}
                {member.socials.youtube && (
                  <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                )}
                {member.socials.whatsapp && (
                  <a href={member.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                )}
                {member.socials.behance && (
                  <a href={member.socials.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance">
                    <FaBehance />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAllMembers && (
          <div className="view-more-container">
            <button 
              onClick={() => setShowAllMembers(true)}
              className="view-more-button"
            >
              View All {teamMembers.length} Team Members
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAllMembers && (
          <div className="view-more-container">
            <button 
              onClick={() => setShowAllMembers(false)}
              className="view-more-button"
            >
              Show Less
            </button>
          </div>
        )}

        {/* Join Mission CTA */}
        <div className="join-mission-card">
          <h3><span className='wanny'>Want to Join Our Mission?</span></h3>
          <p> <span className='wan'>We're always looking for passionate students who want to help their juniors succeed. Join our team and make a difference in thousands of lives.</span></p>
          <button className="cta-button">Apply to Join Team</button>
        </div>

      </div>
    </section>
  );
};

// WhatsApp Section Component
const WhatsAppSection = () => {
  return (
    <div className="whatsapp-section">
      <div className="whatsapp-container">
        <Card
          heading={<div className="t1">Join Our WhatsApp Community</div>}
          text="Connect instantly with peers, mentors, and college seniors. Get real-time updates, ask questions, and be part of a vibrant student community!"
          buttonText="Join WhatsApp"
          link="https://chat.whatsapp.com/HbLY6umdG2G5jKfeRIfbxf"
          extras="🚀 Fast answers • 🤝 Peer support • 🆓 Free to join"
        />
        <Card
          heading={<div className="t1">Connect On YouTube</div>}
          text="Get insights, tutorials, and expert advice on college admissions and career paths directly from our team on the Techz DADA YouTube channel."
          buttonText="Subscribe"
          link="https://youtube.com/@techzdada1103?si=daKmsT95yQi50d-d"
          extras="🎥 Video Guides • 💬 Live Q&A • 🔔 Stay Updated"
        />
      </div>
    </div>
  );
};

// Model College List Component
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
    desc: 'Insights and advice from students who\'ve been through it.',
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
  const { isDarkMode } = useTheme();
  
  return (
         <div className={`model-wrapper px-6 md:px-12 py-12 max-w-7xl mx-auto rounded-3xl shadow-xl transition-colors duration-300 ${isDarkMode ? 'bg-[#111111]' : 'bg-[#fff7f2]'}`}>
      <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
        
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className={`text-3xl md:text-4xl font-extrabold leading-snug transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Why Choose Our <span className="text-orange-600">Model List?</span>
          </h2>
          <p className={`text-base md:text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Our Model College List is crafted for high-achieving students aiming for top colleges. It combines data-backed insights and real student experiences to help you make confident choices.
          </p>

          <div className="space-y-5">
            {features.map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-semibold text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h4>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
            
                     <div className={`p-5 rounded-xl mt-6 text-sm shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#111111] text-gray-300' : 'bg-orange-50 text-gray-700'}`}>
            <h4 className={`font-semibold mb-3 text-base transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>What You Get:</h4>
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
          <div className={`border p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-[#111111] border-gray-700' : 'bg-white border-gray-200'}`}>
            <span className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Most Popular
            </span>

            <h3 className={`text-2xl font-bold text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Model College List</h3>
            <p className={`text-sm text-center mt-1 mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Complete guidance for high-percentile students
            </p>

            <div className="text-center text-4xl font-extrabold text-orange-600 mb-4">
              ₹199 <span className={`text-base font-normal transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>one-time</span>
            </div>

            <ul className={`space-y-3 text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
            <p className={`text-xs text-center mt-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Perfect for students targeting top colleges in Mumbai & Pune
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
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
              <button type="submit">Send Message</button>
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

// Main Home Component
const Home = () => {
  const { isDarkMode } = useTheme();
  const [selectedCollege, setSelectedCollege] = useState(null);
  
  const handleCollegeSelect = (college) => {
    setSelectedCollege(college);
  };
  
  const handleBackToHome = () => {
    setSelectedCollege(null);
  };
  
  // If a college is selected, show the college info page
  if (selectedCollege) {
    return <CollegeInfo college={selectedCollege} onBack={handleBackToHome} />;
  }
  
  return (
    <div className={`home-container transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>
      
      {/* Why Choose Section */}
      <section className="section-spacing">
        <WhyChoose />
      </section>
      
      {/* What is College Pe Charcha Section */}
      <section className="section-spacing">
        <WhatIsSection />
      </section>
      
      {/* Trusted By Section */}
      <section className="section-spacing">
        <TrustedBySection />
      </section>
      
      {/* Carousel Section */}
      <section className="section-spacing">
        <CollegeSection onCollegeSelect={handleCollegeSelect} />
      </section>
      
      {/* College Info Pages Section
      <section className="section-spacing">
        <CollegeInfoPages />
      </section>
       */}
      {/* WhatsApp Section */}
      <section className="section-spacing">
        <WhatsAppSection />
      </section>
      
      {/* Model College List Section */}
      <section id="model-college-list" className="section-spacing">
        <ModelCollegeList />
      </section>
      
      {/* Review Section */}
      <section className="section-spacing">
        <Review />
      </section>
      
      {/* Team Section */}
      <section id="team-section" className="section-spacing">
        <Team />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;





