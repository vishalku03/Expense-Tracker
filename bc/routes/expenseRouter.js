const express = require("express");
const { createExpense, getAllExpenses } = require("../controllers/expenseController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, createExpense);
router.get("/all", authMiddleware, getAllExpenses);

module.exports = router;
