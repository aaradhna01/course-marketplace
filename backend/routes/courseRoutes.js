// 📁 backend/routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const { 
  createCourse, 
  getAllCourses, 
  getCourse, 
  updateCourse, 
  deleteCourse,
  rateCourse,
  getInstructorCourses
} = require('../controllers/courseController');
const auth = require('../middlewares/auth');

router.post('/', auth, createCourse);
router.get('/', getAllCourses);
router.get('/instructor', auth, getInstructorCourses);
router.get('/:id', getCourse);
router.put('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);
router.post('/:id/rate', auth, rateCourse);

module.exports = router;