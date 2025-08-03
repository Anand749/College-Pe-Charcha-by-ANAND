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

export default WhatsAppSection;
