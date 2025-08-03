import React from 'react';
// import './ModelCollegeList.css'; // Optional: for extra styles
import { CheckCircle, FileText, TrendingUp, Users } from 'lucide-react';

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

export default ModelCollegeList;
