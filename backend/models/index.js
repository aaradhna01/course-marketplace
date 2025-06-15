const sequelize = require('../config/db');
const User = require('./User');
const Course = require('./Course');
const Enrollment = require('./Enrollment');

// Associations
User.belongsToMany(Course, {
  through: Enrollment,
  foreignKey: 'userId',
  otherKey: 'courseId'
});

Course.belongsToMany(User, {
  through: Enrollment,
  foreignKey: 'courseId',
  otherKey: 'userId'
});

module.exports = {
  sequelize,
  User,
  Course,
  Enrollment
};
