const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address']
        },
        message: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Contact', contactSchema);