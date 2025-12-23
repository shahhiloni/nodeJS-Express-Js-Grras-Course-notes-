const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

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

// Server
app.listen(3000, () =>
  console.log("Server started on port 3000")
);
