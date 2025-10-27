// // 📁 frontend/src/components/CourseList.js
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// function CourseList() {
//   const [courses, setCourses] = useState([]);
//   const { token } = useContext(AuthContext);

//   useEffect(() => {
//     axios.get('http://localhost:3003/api/courses')
//       .then(res => setCourses(res.data));
//   }, []);

//   const enroll = async (id) => {
//     await axios.post(`http://localhost:3003/api/enroll/${id}`, {}, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     alert('Enrolled!');
//   };

//   return (
//     <div>
//       {courses.map(c => (
//         <div key={c.id}>
//           <h3>{c.title}</h3>
//           <p>{c.description}</p>
//           <p>₹{c.price}</p>
//           <button onClick={() => enroll(c.id)}>Enroll</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CourseList;

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:3003/api/courses')
      .then(res => {
        console.log("📦 API Response:", res.data);
        setCourses(res.data.courses || []); // ✅ Always array
      })
      .catch(err => console.error("❌ Fetch Error:", err));
  }, []);

  const enroll = async (id) => {
    try {
      await axios.post(`http://localhost:3003/api/enroll/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('✅ Enrolled!');
    } catch (err) {
      console.error("❌ Enroll Error:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Available Courses</h2>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        courses.map((c) => (
          <div key={c.id} className="card p-3 mb-3 shadow">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p><b>₹{c.price}</b></p>
            <button className="btn btn-success" onClick={() => enroll(c.id)}>Enroll</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CourseList;

