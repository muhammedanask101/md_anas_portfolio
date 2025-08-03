const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./configs/db');
require('dotenv').config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});