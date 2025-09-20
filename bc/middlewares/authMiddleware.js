const jwt = require("jsonwebtoken");
const userModel = require("../db/userModel");
const { error } = require("../utils/handler");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send(error(401, "No token provided"));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) return res.status(401).send(error(401, "Invalid token"));

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send(error(401, "Unauthorized"));
  }
};

module.exports = authMiddleware;
