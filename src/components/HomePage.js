import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import lizardImage from '../assets/download.jpg'; // Replace with the path to your image

const HomePage = () => (
  <div className="homepage">
    <div className="homepage-content">
      <img src={lizardImage} alt="Lizard" className="homepage-image" />
      <div className="homepage-text">
        <h1 className="homepage-title">HackBuddy!</h1>
        <p className="homepage-subtitle">— Connect, collaborate, and conquer hackathons together!</p>
        <Link to="/profile" className="button call-to-action">Join Now</Link>
      </div>
    </div>
    <div className="categories">
      <Link to="/geckos" className="category-button">Projects <span>→</span></Link>
      <Link to="/chameleons" className="category-button">Teams <span>→</span></Link>
      <Link to="/other" className="category-button">Other Sections <span>→</span></Link>
    </div>
  </div>
);

export default HomePage;
