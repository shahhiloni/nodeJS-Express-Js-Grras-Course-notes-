const express = require("express");
const bcrypt = require("bcryptjs");
const Register = require("../Model/Register");
const router = express.Router();

// POST Register API
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;

    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    // hash password 
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new Register({
      name,
      email,
      password: hashPassword,
      contact,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Registered Successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
