import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // for custom styling (optional)

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h1>📚 Welcome to Course Marketplace</h1>
        <p>Your one-stop platform to learn and teach!</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/register" className="btn btn-success mx-2">Register</Link>
        </div>
      </div>

      <div className="features">
        <h2>🔥 Features</h2>
        <ul>
          <li>Browse and Enroll in Courses</li>
          <li>Create Courses as an Instructor</li>
          <li>Track Your Learning Progress</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
