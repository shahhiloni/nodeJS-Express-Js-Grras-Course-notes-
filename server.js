const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// temporary data storage using array methods

let students = [];
let idCounter = 1;

// POST - create new student data 
app.post("/api/students", (req, res) => {
    const {name, email, age} = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ message: "all fields are required" });
    }

    const newStudent = {
        id: idCounter++,
        name,
        email,
        age
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// GET method - show data using particular id (params)
app.get("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// PUT method - update existing data 
app.put("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, age } = req.body;

    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = name || student.name;
    student.email = email || student.email;
    student.age = age || student.age;

    res.json(student);
});

// DELETE - delete data using ID 
app.delete("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deleted = students.splice(index, 1);

    res.json({
        message: "Data deleted successfully",
        deleted
    });
});

// PORT connection for run API 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

