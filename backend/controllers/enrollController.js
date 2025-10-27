const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");

exports.enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const userId = req.user.id;

    // Check if course exists
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if already enrolled
    const existing = await Enrollment.findOne({
      where: { UserId: userId, CourseId: courseId },
    });
    if (existing) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    // Create new enrollment
    const enroll = await Enrollment.create({ UserId: userId, CourseId: courseId });

    res.status(201).json({
      message: "Enrolled successfully",
      enroll,
    });
  } catch (err) {
    console.error("❌ Enrollment Error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get user's enrolled courses
exports.getMyCourses = async (req, res) => {
  try {
    const userId = req.user.id;
    const enrollments = await Enrollment.findAll({
      where: { UserId: userId },
      include: [{ model: Course }],
    });

    const courses = enrollments.map((e) => e.Course);
    res.json(courses);
  } catch (err) {
    console.error("❌ MyCourses Error:", err);
    res.status(500).json({ error: err.message });
  }
};
