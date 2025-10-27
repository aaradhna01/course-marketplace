const sequelize = require("../config/db");
const User = require("./User");
const Course = require("./Course");
const Enrollment = require("./Enrollment");

// ✅ Associations

// One user can enroll in many courses
User.belongsToMany(Course, {
  through: Enrollment,
  foreignKey: "UserId",
  otherKey: "CourseId",
});

Course.belongsToMany(User, {
  through: Enrollment,
  foreignKey: "CourseId",
  otherKey: "UserId",
});

// For easier access
Enrollment.belongsTo(User, { foreignKey: "UserId" });
Enrollment.belongsTo(Course, { foreignKey: "CourseId" });

module.exports = {
  sequelize,
  User,
  Course,
  Enrollment,
};
