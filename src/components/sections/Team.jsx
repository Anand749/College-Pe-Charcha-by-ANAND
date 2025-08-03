import React from 'react';
import "../../styles/Team.css";
import { FaUsers, FaUniversity, FaCheckCircle, FaHeart, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import anandImg from '../../assets/team1/anand.png';
import samarthImg from '../../assets/team1/SamarthDhagate.jpg';
import vedantiImg from '../../assets/team1/vedanti.jpg';
import { color } from 'framer-motion';

// --- DATA (Replace with your actual team data) ---
const teamMembers = [
  {
    name: 'Anand Chapke',
    role: 'Founder & Lead',
    education: "VIT Pune - Information Technology",
    description: 'Passionate about helping students achieve their dreams. Built this platform to democratize college guidance.',
    img: anandImg,
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
    img: samarthImg,
    socials: {
      instagram: '#', // Replace with Samarth's Instagram link
      linkedin: 'https://www.linkedin.com/in/samarth-dhagate-187b46320/?originalSubdomain=in',  // Replace with Samarth's LinkedIn link
      // You can omit links if they don't exist
      
    }
  },
  {
    name: 'Vedanti Raut',
    role: 'Marketing Lead',
    education: 'VIT Pune - Computer Science(AI)',
    description: 'Connects with students across Maharashtra, spreading awareness of our mission and building our community through strategic outreach.',
    img: vedantiImg,
    socials: {
      instagram: '#', // Replace with Vedanti's Instagram link
      linkedin: 'https://www.linkedin.com/in/vedanti-raut-b067a6329/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in',
       // You can omit links if they don't exist
      // Replace with Vedanti's LinkedIn link
    }
  },
  //... other team members
];

const stats = [
  { icon: <FaUsers />, value: '125+', label: 'Team Members' },
  { icon: <FaUniversity />, value: '15+', label: 'Colleges Covered' },
  { icon: <FaCheckCircle />, value: '99%', label: 'Accuracy' },
  { icon: <FaHeart />, value: '12K+', label: 'Students Helped' }
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        
        {/* Header */}
        <header className="team-header">
          <h2> <span className="meet" >Meet Our</span>  <span className="highlight">Dedicated Team</span></h2>
          <p> <span className="m1">Student leaders from top Maharashtra colleges who are passionate about helping the next generation succeed.</span> </p>
        </header>

        {/* Stats Grid */}
        {/* <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div> */}

       <div className="team-grid">
  {teamMembers.map((member, index) => (
    <div key={index} className="team-card">
      <div className="team-photo-wrapper">
        <img src={member.img} alt={member.name} className="team-photo" />
        <div className="role-badge">{member.role}</div>
      </div>
      <h3 className="team-name">{member.name}</h3>
      <p className="team-education">{member.education}</p>
      <p className="team-desc">{member.description}</p>

      {/* MODIFIED SOCIALS SECTION */}
      <div className="team-socials">
        {member.socials.instagram && (
          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
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
      </div>
    </div>
  ))}
</div>

        {/* Join Mission CTA */}
        <div className="join-mission-card">
          <h3><span className='wanny'>Want to Join Our Mission?</span>
             </h3>
          <p> <span className='wan'>We're always looking for passionate students who want to help their juniors succeed. Join our team and make a difference in thousands of lives.</span></p>
          <button className="cta-button">Apply to Join Team</button>
        </div>

      </div>
    </section>
  );
};
  
export default Team;