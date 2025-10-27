// // 📁 frontend/src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import CourseForm from './components/CourseForm';
// import CourseList from './components/CourseList';
// import StudentCourses from './components/StudentCourses';
// import { AuthProvider } from './context/AuthContext';
// import Navbar from './components/Navbar'; // ✅ Add this line
// import HomePage from './components/HomePage'; // ✅ Import



// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar /> {/* ✅ Show navbar on all pages */}
//         <Routes>
//             <Route path="/" element={<HomePage />} />  {/* ✅ Set HomePage */}
//           <Route path="/" element={<CourseList />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/create-course" element={<CourseForm />} />
//           <Route path="/my-courses" element={<StudentCourses />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import StudentCourses from './components/StudentCourses';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-course" element={<CourseForm />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/my-courses" element={<StudentCourses />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
