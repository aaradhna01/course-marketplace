// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const Enrollment = sequelize.define('Enrollment', {
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   courseId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }
// }, {
//   timestamps: true
// });

// module.exports = Enrollment;

// // 📁 backend/models/Enrollment.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');

// const Enrollment = sequelize.define('Enrollment', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   UserId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   CourseId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
// });

// module.exports = Enrollment;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Enrollment = sequelize.define("Enrollment", {
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  CourseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Enrollment;

