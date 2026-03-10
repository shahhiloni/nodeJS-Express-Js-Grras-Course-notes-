const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  correctAnswers: {
    type: Number,
    required: true
  },
  wrongAnswers: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Result", ResultSchema);