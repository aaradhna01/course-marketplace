import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
      <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/create-course" style={{ marginRight: '10px' }}>Create Course</Link>
      <Link to="/my-courses">My Courses</Link>
    </nav>
  );
};

export default Navbar;
