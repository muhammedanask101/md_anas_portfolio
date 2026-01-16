const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./configs/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is alive...");
});

app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server failed to start:", err);
    process.exit(1);
  }
};

startServer();
