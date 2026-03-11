const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/FullStack_dev");

const db = mongoose.connection;
db.on("error", (error) =>
  console.error("DB not connected", error)
);
db.once("open", () =>
  console.log("Database connected successfully")
);

// Register Routes
const registerRoutes = require("./Routes/registerRoutes");
app.use("/api", registerRoutes);

const loginRoutes = require("./Routes/loginRoutes");
app.use("/api", loginRoutes)

const resultRoutes = require("./Routes/resultRoutes");
app.use("/api", resultRoutes);

// Server
app.listen(4000, () =>
  console.log("Server started on port 4000")
);
