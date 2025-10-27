
// // 📁 backend/controllers/courseController.js
// const Course = require('../models/Course');
// const { Op } = require('sequelize');

// exports.createCourse = async (req, res) => {
//   try {
//     console.log("📩 Incoming course data:", req.body);
//     console.log("👤 User info:", req.user?.id);

//     const courseData = {
//       ...req.body,
//       UserId: req.user?.id || null,   // ✅ Safe fallback if req.user undefined
//       totalLectures: 0,
//       rating: 0,
//       totalRatings: 0,
//       isPublished: false,
//     };

//     const course = await Course.create(courseData);
//     res.status(201).json(course);
//   } catch (err) {
//     console.error("❌ Error creating course:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

// // ✅ Baaki sab functions same rahenge:
// exports.getAllCourses = async (req, res) => {
//   try {
//     const { search, category, level, minPrice, maxPrice, sortBy = 'createdAt', sortOrder = 'DESC', page = 1, limit = 10 } = req.query;

//     const where = {
//       isPublished: true,
//       ...(search && {
//         [Op.or]: [
//           { title: { [Op.iLike]: `%${search}%` } },
//           { description: { [Op.iLike]: `%${search}%` } }
//         ]
//       }),
//       ...(category && { category }),
//       ...(level && { level }),
//       ...(minPrice && { price: { [Op.gte]: parseFloat(minPrice) } }),
//       ...(maxPrice && { price: { [Op.lte]: parseFloat(maxPrice) } })
//     };

//     const courses = await Course.findAndCountAll({
//       where,
//       limit: parseInt(limit),
//       offset: (page - 1) * limit,
//       order: [[sortBy, sortOrder.toUpperCase()]]
//     });

//     res.json({
//       courses: courses.rows,
//       total: courses.count,
//       currentPage: parseInt(page),
//       totalPages: Math.ceil(courses.count / limit)
//     });
//   } catch (err) {
//     console.error("❌ Error fetching courses:", err);
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getCourse = async (req, res) => {
//   try {
//     const course = await Course.findByPk(req.params.id);
//     if (!course) return res.status(404).json({ message: 'Course not found' });
//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.updateCourse = async (req, res) => {
//   try {
//     const course = await Course.findByPk(req.params.id);
//     if (!course) return res.status(404).json({ message: 'Course not found' });
//     if (course.UserId !== req.user?.id)
//       return res.status(403).json({ message: 'Not authorized' });

//     await course.update(req.body);
//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.deleteCourse = async (req, res) => {
//   try {
//     const course = await Course.findByPk(req.params.id);
//     if (!course) return res.status(404).json({ message: 'Course not found' });
//     if (course.UserId !== req.user?.id)
//       return res.status(403).json({ message: 'Not authorized' });

//     await course.destroy();
//     res.json({ message: 'Course deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.rateCourse = async (req, res) => {
//   try {
//     const { rating } = req.body;
//     const course = await Course.findByPk(req.params.id);
//     if (!course) return res.status(404).json({ message: 'Course not found' });

//     const newTotalRatings = course.totalRatings + 1;
//     const newRating = ((course.rating * course.totalRatings) + rating) / newTotalRatings;

//     await course.update({
//       rating: newRating,
//       totalRatings: newTotalRatings
//     });

//     res.json(course);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// exports.getInstructorCourses = async (req, res) => {
//   try {
//     const courses = await Course.findAll({
//       where: { UserId: req.user?.id }
//     });
//     res.json(courses);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// 📁 backend/controllers/courseController.js
const Course = require('../models/Course');
const { Op } = require('sequelize');

// ✅ Create a new course (auto-published)
exports.createCourse = async (req, res) => {
  try {
    console.log("📩 Incoming course data:", req.body);
    console.log("👤 User info:", req.user?.id);

    const courseData = {
      ...req.body,
      UserId: req.user?.id || null,   // ✅ Safe fallback if req.user undefined
      totalLectures: 0,
      rating: 0,
      totalRatings: 0,
      isPublished: true,  // ✅ Course automatically published
    };

    const course = await Course.create(courseData);
    res.status(201).json(course);
  } catch (err) {
    console.error("❌ Error creating course:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all published courses
exports.getAllCourses = async (req, res) => {
  try {
    const {
      search,
      category,
      level,
      minPrice,
      maxPrice,
      sortBy = 'createdAt',
      sortOrder = 'DESC',
      page = 1,
      limit = 10
    } = req.query;

    const where = {
      isPublished: true,
      ...(search && {
        [Op.or]: [
          { title: { [Op.iLike]: `%${search}%` } },
          { description: { [Op.iLike]: `%${search}%` } }
        ]
      }),
      ...(category && { category }),
      ...(level && { level }),
      ...(minPrice && { price: { [Op.gte]: parseFloat(minPrice) } }),
      ...(maxPrice && { price: { [Op.lte]: parseFloat(maxPrice) } })
    };

    const courses = await Course.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: (page - 1) * limit,
      order: [[sortBy, sortOrder.toUpperCase()]]
    });

    res.json({
      courses: courses.rows,
      total: courses.count,
      currentPage: parseInt(page),
      totalPages: Math.ceil(courses.count / limit)
    });
  } catch (err) {
    console.error("❌ Error fetching courses:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get single course by ID
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update a course (only course owner)
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    if (course.UserId !== req.user?.id)
      return res.status(403).json({ message: 'Not authorized' });

    await course.update(req.body);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    if (course.UserId !== req.user?.id)
      return res.status(403).json({ message: 'Not authorized' });

    await course.destroy();
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Rate a course
exports.rateCourse = async (req, res) => {
  try {
    const { rating } = req.body;
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    const newTotalRatings = course.totalRatings + 1;
    const newRating = ((course.rating * course.totalRatings) + rating) / newTotalRatings;

    await course.update({
      rating: newRating,
      totalRatings: newTotalRatings
    });

    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get courses created by the instructor
exports.getInstructorCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      where: { UserId: req.user?.id }
    });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
