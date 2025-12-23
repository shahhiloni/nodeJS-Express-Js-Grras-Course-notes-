
// validation and schema

const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Force collection name = register
module.exports = mongoose.model("Register", registerSchema, "Register");
