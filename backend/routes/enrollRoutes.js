const express = require("express");
const { enrollCourse, getMyCourses } = require("../controllers/enrollController");
const auth = require("../middlewares/auth");
const router = express.Router();

// ✅ Enroll in a course (POST)
router.post("/:courseId", auth, enrollCourse);

// ✅ Get my enrolled courses (GET)
router.get("/my", auth, getMyCourses);

module.exports = router;
