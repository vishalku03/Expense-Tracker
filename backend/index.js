// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDb = require('../backend/db/db');
// const userRouter = require('./router/userRouter')
// const expenseRouter = require('./router/expenseRouter')
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/auth',userRouter)
// app.use('/expenses',expenseRouter)
// connectDb();

// const port = 4000 || process.env.PORT_NO ;
// app.listen(port , ()=>{
//         console.log(`Server on :- ${port}`);
// })



const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Example test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});
