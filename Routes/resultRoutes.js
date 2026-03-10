const express = require("express");
const router = express.Router();
const Result = require("../Model/Result");


// Save Quiz Result
router.post("/save-result", async (req, res) => {
  try {

    const result = new Result(req.body);

    await result.save();

    res.status(201).json({
      message: "Result Saved Successfully",
      result
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get All Results
router.get("/results", async (req, res) => {

  const results = await Result.find();

  res.json(results);

});

module.exports = router;