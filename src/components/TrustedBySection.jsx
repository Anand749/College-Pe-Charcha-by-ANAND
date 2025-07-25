// TrustedBySection.jsx
import React from 'react';
import '../styles/TrustedBySection.css';
import CountUp from './CountUp';

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

export default TrustedBySection;