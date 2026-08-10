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

// GET APIs
router.get("/users", async (req, res) => {
  try {
    const users = await Register.find().select("-password");

    res.status(200).json({
      message: "Users fetched successfully",
      total: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

// GET API According Particular ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await Register.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

// Update APIs
router.put("/users/:id", async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;

    const updateData = {
      name,
      email,
      contact,
    };

    // Hash new password if provided
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await Register.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});


// delete APIs
router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await Register.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});


module.exports = router;
