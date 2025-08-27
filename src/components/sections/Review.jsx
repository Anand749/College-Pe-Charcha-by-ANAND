import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anway Shimpne",
    review: "Through CollegePecharcha’s WhatsApp groups, I got to talk directly with seniors from different colleges. They cleared all my doubts honestly and shared real experiences.  I hope to see your team in VIT soon!",
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

export default Review;
