// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={{ padding: '1rem', background: '#eee' }}>
//       <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
//       <Link to="/register" style={{ marginRight: '10px' }}>Register</Link>
//       <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
//       <Link to="/create-course" style={{ marginRight: '10px' }}>Create Course</Link>
//       <Link to="/my-courses">My Courses</Link>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">🎓 CourseHub</Link>
        <div>
          <Link to="/" className="btn btn-outline-primary mx-2">Home</Link>
          <Link to="/register" className="btn btn-outline-success mx-2">Register</Link>
          <Link to="/login" className="btn btn-outline-dark mx-2">Login</Link>
          <Link to="/create-course" className="btn btn-outline-info mx-2">Create</Link>
          <Link to="/courses" className="btn btn-outline-warning mx-2">Courses</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
