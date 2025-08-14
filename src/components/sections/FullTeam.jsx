import React from "react";
import "../../styles/Team.css"; // reuse your existing styling
import { FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

// Import team data (you can export it from Team.jsx instead of duplicating)
import { teamMembers } from "./Team"; 

const FullTeam = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <header className="team-header">
          <h2><span className="meet">Meet Our</span> <span className="highlight">Entire Team</span></h2>
        </header>

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
      </div>
    </section>
  );
};

export default FullTeam;
