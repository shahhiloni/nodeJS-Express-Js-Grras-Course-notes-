const express = require('express');
const bcrypt = require("bcryptjs");
const Register  = require('../Model/Register');

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const  {email, password} = req.body;

const user = await Register.findOne({email});
if(!user) {
    return res.status(400).json({message: "User not Found"})
}

const isMatch = await bcrypt.compare(password, user.password);
if(!isMatch) {
    return res.status(400).json({message: "invalid Password"});
}

res.status(200).json({
    message: "login successfully",
    user: {
        id: user._id, 
        name: user.name, 
        email: user.email,
    }, 
});
    } catch (error) {
        res.status(500).json({
            message: "server error", 
            error: error.message,
        });
    }
});

module.exports = router;