// 📁 frontend/src/components/CourseForm.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function CourseForm() {
  const [form, setForm] = useState({ title: '', description: '', price: '' });
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/courses', form, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
      <button type="submit">Create Course</button>
    </form>
  );
}

export default CourseForm;
