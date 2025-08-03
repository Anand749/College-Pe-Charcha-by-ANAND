import React from 'react';
import "../../styles/Footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa';
// Assuming you have a logo image in your assets folder
import logo from "../../assets/footerlogo.png"; // Make sure this path is correct
import { FaMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Main 4-Column Section */}
        <div className="footer-main">
          <div className="footer-column">
            <img src={logo} alt="College pe Charcha Logo" className="logo" />
            <p>
              Maharashtra's only non-profit, student-led initiative helping thousands of students achieve their college dreams with accurate predictions and expert guidance.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/myself_techzdada11/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://chat.whatsapp.com/HbLY6umdG2G5jKfeRIfbxf" aria-label="Whatsapp"><FaWhatsapp /></a>
              <a href="https://youtube.com/@techzdada1103?si=lZ3JCFcVJptVLq7R" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/college-pe-charcha/" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading ">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">College Predictor</a></li>
              <li><a href="#">Top Colleges</a></li>
              <li><a href="#">Model List</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">College Prediction</a></li>
              <li><a href="#">Admission Guidance</a></li>
              <li><a href="#">Career Counseling</a></li>
              <li><a href="#">Hostel Information</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                 
                <FaMessage className="icon"></FaMessage>
                <span>collegepecharcha11@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <span>+91 7499957162</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
            <div className="newsletter-form">
              <h4 className="footer-heading" style={{fontSize: '1rem', marginBottom: '15px'}}>Stay Updated</h4>
              <input type="email" placeholder="Your email" />
              <button type="submit">Send Messege</button>
            </div>
          </div>
        </div>

      
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} College pe Charcha. All rights reserved. Made with <span className="love">♥</span> for Maharashtra students.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;