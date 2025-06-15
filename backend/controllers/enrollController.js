// 📁 backend/controllers/enrollController.js
const Enrollment = require('../models/Enrollment');

exports.enroll = async (req, res) => {
  try {
    await Enrollment.create({ UserId: req.user.id, CourseId: req.params.courseId });
    res.json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.myCourses = async (req, res) => {
  try {
    const courses = await req.user.getCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};