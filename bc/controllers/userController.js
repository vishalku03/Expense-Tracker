const userModel = require("../db/userModel");
const { success, error } = require("../utils/handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup
const signupController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).send(error(400, "All fields required"));

    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(409).send(error(409, "User already exists"));

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ username, email, password: hashedPassword });

    return res.status(201).send(success(201, { message: "User created", userId: newUser._id }));
  } catch (err) {
    return res.status(500).send(error(500, err.message));
  }
};

// Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send(error(400, "Email and password required"));

    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).send(error(401, "User not found"));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send(error(401, "Invalid password"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return res.status(200).send(success(200, { message: "Login successful", token }));
  } catch (err) {
    return res.status(500).send(error(500, err.message));
  }
};

// Logout (optional, frontend can just remove token)
const logoutController = async (req, res) => {
  return res.status(200).send(success(200, "Logged out successfully"));
};

module.exports = { signupController, loginController, logoutController };
