// // 📁 frontend/src/components/Register.js
// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const { register } = useContext(AuthContext);
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await register(form.name, form.email, form.password, form.role);
//     navigate('/login');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
//       <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
//       <select onChange={e => setForm({ ...form, role: e.target.value })}>
//         <option value="student">Student</option>
//         <option value="instructor">Instructor</option>
//       </select>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;

import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.name, form.email, form.password, form.role);
      alert("✅ Registration Successful!");
      navigate("/login");
    } catch (err) {
      alert("❌ Registration Failed");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card shadow-lg">
        <h2 className="mb-4 text-center fw-bold text-primary">🎓 CourseHub</h2>
        <h4 className="mb-3 text-center">Create Your Account ✨</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Role</label>
            <select
              className="form-select"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none fw-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
