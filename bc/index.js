// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./db/db");
// const userRouter = require("./routes/userRouter");
// const expenseRouter = require("./routes/expenseRouter");

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // **Add home route**
// app.get("/", (req, res) => {
//   res.send("🚀 Expense Tracker Backend is running!");
// });

// // Routers
// app.use("/api/user", userRouter);
// app.use("/api/expense", expenseRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const userRouter = require("./routes/userRouter");
const expenseRouter = require("./routes/expenseRouter");
const cors = require("cors"); // <-- Add this

const app = express();
app.use(express.json());

// Enable CORS for React frontend
app.use(cors({
  origin: "http://localhost:3000", // React frontend URL
  credentials: true
}));

// Connect to MongoDB
connectDB();

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Expense Tracker Backend is running!");
});

// Routers
app.use("/api/user", userRouter);
app.use("/api/expense", expenseRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
