// backend/app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect database
connectDB();

// API routes
app.get("/", (req, res) => {
  res.send("✅ Web3 Backend API running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
