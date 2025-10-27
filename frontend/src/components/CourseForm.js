// // 📁 frontend/src/components/CourseForm.js
// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// function CourseForm() {
//   const [form, setForm] = useState({ title: '', description: '', price: '' });
//   const { token } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:5000/api/courses', form, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
//       <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
//       <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
//       <button type="submit">Create Course</button>
//     </form>
//   );
// }

// export default CourseForm;


// import React, { useState } from "react";
// import api from "../api/api";

// function CourseForm() {
//   const [form, setForm] = useState({ title: "", description: "", price: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await api.post("/courses", form);
//     alert("✅ Course created successfully!");
//     setForm({ title: "", description: "", price: "" });
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Create New Course</h2>
//       <form onSubmit={handleSubmit} className="card p-4 shadow">
//         <input
//           className="form-control mb-3"
//           placeholder="Title"
//           required
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />
//         <textarea
//           className="form-control mb-3"
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         ></textarea>
//         <input
//           className="form-control mb-3"
//           placeholder="Price"
//           required
//           type="number"
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//         />
//         <button className="btn btn-success" type="submit">
//           Create Course
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CourseForm;

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function CourseForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    duration: ''
  });
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3003/api/courses', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('✅ Course created successfully!');
      setForm({ title: '', description: '', price: '', category: '', duration: '' });
    } catch (err) {
      console.error('❌ Error creating course:', err.response?.data || err.message);
      alert('❌ Failed to create course. Check console for details.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input
          className="form-control mb-3"
          placeholder="Title"
          required
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="form-control mb-3"
          placeholder="Description"
          required
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <input
          className="form-control mb-3"
          placeholder="Price"
          type="number"
          required
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="form-control mb-3"
          placeholder="Category"
          required
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        <input
          className="form-control mb-3"
          placeholder="Duration (e.g. 12 weeks)"
          required
          value={form.duration}
          onChange={e => setForm({ ...form, duration: e.target.value })}
        />
        <button className="btn btn-success" type="submit">
          Create Course
        </button>
      </form>
    </div>
  );
}

export default CourseForm;

