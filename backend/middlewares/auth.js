// // 📁 backend/middlewares/auth.js
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// module.exports = async (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(401).json({ error: 'No token' });

//   const token = authHeader.split(' ')[1];
//   try {
//     const decoded = jwt.verify(token, 'secret_key');
//     const user = await User.findByPk(decoded.id);
//     req.user = user;
//     next();
//   } catch (err) {
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// };

const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "secret_key"); // ✅ same secret as login

    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user; // ✅ attach user object
    next();
  } catch (err) {
    console.error("Auth Error:", err.message);
    res.status(401).json({ error: "Unauthorized" });
  }
};
