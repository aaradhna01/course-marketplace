// 📁 frontend/src/components/CourseList.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => setCourses(res.data));
  }, []);

  const enroll = async (id) => {
    await axios.post(`http://localhost:5000/api/enroll/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert('Enrolled!');
  };

  return (
    <div>
      {courses.map(c => (
        <div key={c.id}>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <p>₹{c.price}</p>
          <button onClick={() => enroll(c.id)}>Enroll</button>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
