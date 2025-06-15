// 📁 backend/controllers/courseController.js
const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body, UserId: req.user.id });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};