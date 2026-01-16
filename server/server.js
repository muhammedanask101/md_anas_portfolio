const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./configs/db');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is alive...");
});

app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});