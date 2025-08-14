import React, { useEffect, useRef, useState } from 'react';
import "../styles/Carousel.css";

// Local images
import coep from "../assets/coep.webp";
import vit from "../assets/vit.jpg";
import pict from "../assets/pict.webp";
import pccoe from "../assets/pccoe.jpg";
import vjti from "../assets/vjti.jpg";

const colleges = [
  {
    img: vjti,
    name: "Veermata Jijabai Technological Institute (VJTI)",
    address: "H R Mahajani Rd, Matunga, Mumbai, Maharashtra 400019",
    link: "#",
  },
  {
    img: vit,
    name: "Pune Institute of Computer Technology (PICT)",
    address: "Survey No. 27, Near Trimurti Chowk, Bharati Vidhyapith Campus, Pune",
    link: "#",
  },
  {
    img: coep,
    name: "Walchand College of Engineering",
    address: "Government Colony, Vishrambag, Sangli, Maharashtra",
    link: "#",
  },
  {
    img: pict,
    name: "Cummins College of Engineering for Women",
    address: "Karve Nagar, Pune, Maharashtra 411052",
    link: "#",
  },
  {
    img: pccoe,
    name: "Vishwakarma Institute of Technology (VIT)",
    address: "Upper Indira Nagar, Bibwewadi, Pune 411037",
    link: "#",
  },
];

const Carousel = () => {
  const rowRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!rowRef.current) return;

    const row = rowRef.current;
    const getStep = () => {
      const first = row.querySelector('.college-card');
      if (!first) return 300;
      const rect = first.getBoundingClientRect();
      const gap = parseFloat(getComputedStyle(row).gap || '16');
      return rect.width + gap;
    };

    const interval = setInterval(() => {
      if (isPaused) return;
      const step = getStep();
      const nearEnd = row.scrollLeft + row.clientWidth + step >= row.scrollWidth - 1;
      if (nearEnd) {
        row.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        row.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="explore-section">
      <div className="explore-header">
        <h2 className="explore-title">Explore Top Colleges</h2>
        <p className="explore-sub">Scroll through and discover colleges. Connect with students and get real insights!</p>
      </div>

      <div
        className="explore-row"
        ref={rowRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Auto-sliding list of top colleges"
      >
        {colleges.map((c, i) => (
          <article className="college-card" key={i}>
            <div className="card-media">
              <img src={c.img} alt={c.name} loading="lazy" />
            </div>
            <div className="card-body">
              <h3 className="card-title" title={c.name}>{c.name}</h3>
              <p className="card-address">{c.address}</p>
              <a className="card-cta" href={c.link}>Explore More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Carousel;