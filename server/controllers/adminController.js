const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/adminModel');

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const admin = Admin.findOne({ email });

    if (admin && (await bcrypt.compare(password, admin.password))){
        res.json({ _id: admin.id, name: admin.name, email: admin.email, token: generateJWTtoken(user._id) });
    } else {
        res.status(400);
        throw new Error('Invalid admin credentials, try again...');
    }
})

const getCurrentAdmin = asyncHandler(async (req, res) => {
    const { _id, name, email } = await Admin.findById(req.admin.id);
    res.status(200).json({ id: _id, name, email });
})

const generateJWTtoken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '5d' });

module.exports = { loginAdmin, getCurrentAdmin };