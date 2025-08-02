// src/components/sections/Team.jsx (Updated file path)
import React from 'react';

// Team member images - CORRECTED PATHS
import aadityaSharmaImg from '../../assets/dypit.jpg'; // Corrected path: go up two levels to src/, then into assets/
import priyaPatilImg from '../../assets/pccoe.jpg';   // Corrected path
import rahulDeshmukhImg from '../../assets/wce.jpg'; // Corrected path

// Icons for stats - CORRECTED PATHS
import teamIcon from '../../assets/coep.webp';      // Corrected path
import collegeIcon from '../../assets/logo.png';   // Corrected path
import successIcon from '../../assets/vit.jpg';    // Corrected path
import studentsIcon from '../../assets/vjti.jpg'; // Corrected path


const Team = () => {
  // Data for the statistical cards
  const stats = [
    {
      icon: teamIcon,
      value: '125+',
      label: 'Team Members',
    },
    {
      icon: collegeIcon,
      value: '15+',
      label: 'Colleges Covered',
    },
  
    {
      icon: studentsIcon,
      value: '12K+',
      label: 'Students Helped',
    },
  ];

  // Data for team members
  const teamMembers = [
    {
      image: aadityaSharmaImg,
      role: 'Founder & Lead Developer',
      name: 'Aaditya Sharma',
      education: 'IIT Bombay - Computer Science',
      description: 'Passionate about helping students achieve their dreams. Built this platform to democratize college guidance.',
      social: {
        linkedin: '#', // Placeholder link
        twitter: '#',  // Placeholder link
        email: '#',    // Placeholder link
      },
    },
    {
      image: priyaPatilImg,
      role: 'Student Counselor',
      name: 'Priya Patil',
      education: 'VJTI Mumbai - Information Technology',
      description: 'Helps students navigate the complex admission process with personalized guidance and mentorship.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
    {
      image: rahulDeshmukhImg,
      role: 'Data Analyst',
      name: 'Rahul Deshmukh',
      education: 'COEP Pune - Electronics Engineering',
      description: 'Analyzes admission trends and develops prediction algorithms to provide accurate college recommendations.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
  ];

  return (
    <section className="bg-orange-400 text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Meet Our <span className="text-orange-500">Dedicated Team</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Student leaders from top Maharashtra colleges who are passionate about helping the next generation succeed.
        </p>
      </div>

      {/* Statistical Cards */}
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 text-center w-48 h-48 flex flex-col items-center justify-center border border-gray-700 hover:border-orange-500 transition-all duration-300"
          >
            {/* Using img for icons as you have image files */}
            {stat.icon && <img src={stat.icon} alt={stat.label} className="w-12 h-12 mb-3 object-contain" />}
            <p className="text-orange-500 text-4xl font-extrabold">{stat.value}</p>
            <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Team Member Profiles */}
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 w-80 text-center flex flex-col items-center border border-gray-700 hover:border-orange-500 transition-all duration-300"
          >
            <div className="relative mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                {member.role}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{member.education}</p>
            <p className="text-gray-300 text-sm mb-6 px-2">{member.description}</p>
            <div className="flex gap-4">
              {/* LinkedIn Icon - Using basic SVG as before, replace with react-icons if preferred */}
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9h4v12H4zM6 3.5A2.5 2.5 0 013.5 6 2.5 2.5 0 016 3.5z"/></svg>
              </a>
              {/* Twitter Icon */}
              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.85.38-1.77.64-2.73.76.98-.58 1.73-1.5 2.08-2.61-.92.55-1.95.95-3.05 1.17-.87-.93-2.11-1.51-3.49-1.51-2.64 0-4.78 2.14-4.78 4.78 0 .37.04.73.1 1.07C7.6 11.2 4.47 9.5 2.44 6.84c-.4.69-.64 1.49-.64 2.36 0 1.65.84 3.09 2.11 3.94-.78-.02-1.5-.24-2.14-.59v.06c0 2.32 1.65 4.26 3.84 4.7-.4.1-.82.15-1.25.15-.31 0-.6-.03-.89-.08.61 1.91 2.37 3.3 4.47 3.34-1.64 1.28-3.71 2.05-5.96 2.05-.39 0-.77-.02-1.15-.07C2.9 20.35 5.37 21 8 21c9.63 0 14.9-7.98 14.9-14.9 0-.17-.0-.33-.01-.5z"/></svg>
              </a>
              {/* Email Icon */}
              <a href={member.social.email} className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-10.743-8.713h21.486l-10.743 8.713zm0 2.587l-12-9.727v14.439h24v-14.439l-12 9.727z"/></svg>
              </a>
            </div>
          </div>
        ))} 
      </div>
    </section>
  );
};

export default Team;