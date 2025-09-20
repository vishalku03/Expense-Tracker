const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
     type: String, 
     required: true, 
     trim: true 
    },

  email: {
     type: String, 
     required: true, 
     unique: true, 
     lowercase: true, 
     trim: true 
    },

  password: { 
    type: String, 
    required: true
   },

  expense_id: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "expenses" }],
    }, 
    { 
      timestamps: true 
    });

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
