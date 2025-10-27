// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css'; // for custom styling (optional)

// const HomePage = () => {
//   return (
//     <div className="homepage-container">
//       <div className="hero-section">
//         <h1>📚 Welcome to Course Marketplace</h1>
//         <p>Your one-stop platform to learn and teach!</p>
//         <div className="hero-buttons">
//           <Link to="/login" className="btn btn-primary">Login</Link>
//           <Link to="/register" className="btn btn-success mx-2">Register</Link>
//         </div>
//       </div>

//       <div className="features">
//         <h2>🔥 Features</h2>
//         <ul>
//           <li>Browse and Enroll in Courses</li>
//           <li>Create Courses as an Instructor</li>
//           <li>Track Your Learning Progress</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // optional custom CSS

const HomePage = () => {
  const token = localStorage.getItem('token'); // ✅ Check if user is logged in

  return (
    <div className="homepage-container">
      {/* ✅ Hero Section */}
      <div className="hero-section">
        <h1>🎓 CourseHub</h1>
        <h2>📚 Welcome to Course Marketplace</h2>
        <p>Your one-stop platform to learn and teach!</p>

        {/* ✅ Show buttons based on login state */}
        {!token ? (
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-success mx-2">Register</Link>
          </div>
        ) : (
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-info mx-2">Browse Courses</Link>
            <Link to="/create-course" className="btn btn-warning mx-2">Create Course</Link>
            <Link to="/my-courses" className="btn btn-light mx-2">My Courses</Link>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* ✅ Features Section */}
      <div className="features">
        <h2>🔥 Features</h2>
        <ul>
          <li>Browse and Enroll in Courses</li>
          <li>Create Courses as an Instructor</li>
          <li>Track Your Learning Progress</li>
        </ul>
      </div>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} CourseHub • Built with ❤️ by Aradhana Singh</p>
      </footer>
    </div>
  );
};

export default HomePage;
