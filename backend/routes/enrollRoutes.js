// 📁 backend/routes/enrollRoutes.js
const express = require('express');
const { enroll, myCourses } = require('../controllers/enrollController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/:courseId', auth, enroll);
router.get('/my', auth, myCourses);

module.exports = router;