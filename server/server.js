const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./configs/db');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(cors({
  origin: ["https://md-anas-portfolio.vercel.app"],
  methods: ["POST","GET"],
  credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});