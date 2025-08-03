// You can replace these with actual image paths
// e.g., import aSharma from '../assets/mentors/sharma.jpg';

export const teamData = {
  // The featured mentor for the main spotlight
  spotlight: {
    name: 'Aaditya Sharma',
    role: 'Founder & Lead Developer',
    imageUrl: 'https://i.pravatar.cc/150?img=68', // Replace with actual image
    quote: "Our mission is to democratize college guidance for every student in Maharashtra.",
    bio: "Passionate about helping students achieve their dreams. Built this platform from the ground up to make admission guidance accessible to all.",
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  // Mentors grouped by their expertise or college
  constellations: [
    {
      name: 'COEP & VJTI Stars',
      mentors: [
        { name: 'Priya Patil', role: 'VJTI Mumbai', imageUrl: 'https://i.pravatar.cc/150?img=49' },
        { name: 'Rahul Deshmukh', role: 'COEP Pune', imageUrl: 'https://i.pravatar.cc/150?img=32' },
        { name: 'Sneha Joshi', role: 'COEP Pune', imageUrl: 'https://i.pravatar.cc/150?img=26' },
        // ...add more mentors to this group
      ],
    },
    {
      name: 'Computer & IT Experts',
      mentors: [
        { name: 'Amit Kumar', role: 'PICT Pune', imageUrl: 'https://i.pravatar.cc/150?img=11' },
        { name: 'Neha Singh', role: 'SPIT Mumbai', imageUrl: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Rohan Mehta', role: 'VIT Pune', imageUrl: 'https://i.pravatar.cc/150?img=52' },
        { name: 'Anjali Verma', role: 'WCE Sangli', imageUrl: 'https://i.pravatar.cc/150?img=45' },
        // ...add more mentors to this group
      ],
    },
    // Add more constellation groups as needed
  ],
};