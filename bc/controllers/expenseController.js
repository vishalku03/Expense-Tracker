const expenseModel = require("../db/expenseModel");
const userModel = require("../db/userModel");
const { success, error } = require("../utils/handler");

// Create expense
const createExpense = async (req, res) => {
  try {
    const { amount, category, date } = req.body;
    if (!amount || !category || !date) return res.status(400).send(error(400, "All details required"));

    const newExpense = await expenseModel.create({ amount, category, date, usersid: req.user._id });
    req.user.expense_id.push(newExpense._id);
    await req.user.save();

    return res.status(201).send(success(201, newExpense));
  } catch (err) {
    return res.status(500).send(error(500, err.message));
  }
};

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).populate("expense_id");
    return res.status(200).send(success(200, user.expense_id));
  } catch (err) {
    return res.status(500).send(error(500, err.message));
  }
};

module.exports = { createExpense, getAllExpenses };
