import React from 'react';
import aboutImage from '../assets/rest_interior.jpeg';
import '../AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our restaurant! We are passionate about providing delicious food and excellent service to our customers. Our goal is to create a memorable dining experience for everyone who visits.</p>
        <p>Our menu features a variety of dishes made with fresh, locally-sourced ingredients. From hearty mains to delectable desserts, there's something for everyone to enjoy.</p>
        <p>Whether you're dining in with family and friends or grabbing a quick bite to go, we strive to make every visit special. We look forward to serving you!</p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Restaurant Interior" />
      </div>
    </div>
  );
};

export default AboutPage;
