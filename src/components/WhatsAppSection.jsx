// src/components/WhatsAppSection.jsx
import React from 'react';
import Card from './Card';

const WhatsAppSection = () => {
  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', padding: '40px' }}>
      <Card
        heading={<div className="t1">Join Our WhatsApp Community</div>}
        text="Connect instantly with peers, mentors, and college seniors. Get real-time updates, ask questions, and be part of a vibrant student community!"
        buttonText="Join WhatsApp"
        link="#"
        extras="🚀 Fast answers • 🤝 Peer support • 🆓 Free to join"
      />
      <Card


        heading={<div className="t1">Get College Preference List</div>}
        text="Receive a curated list of college preferences based on your interests and career goals. Make informed decisions with expert guidance.
                                                    
        "
        buttonText="Get College List"
        link="#"
        extras="💡 Real ideas • 🤝 Team building • 🧠 Brainstorm freely"
      />
    </div>
  );
};

export default WhatsAppSection;
