// 📁 backend/routes/courseRoutes.js
const express = require('express');
const { createCourse, getAllCourses } = require('../controllers/courseController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/', auth, createCourse);
router.get('/', getAllCourses);

module.exports = router;