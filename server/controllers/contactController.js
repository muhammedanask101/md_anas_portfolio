const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
})

const postContact = asyncHandler(async (req, res) => {
    if(!req.body || !req.body.name || !req.body.email) {
        res.status(400);
        throw new Error('Please input contact information');
    }

    const contact = await Contact.create({ name: req.body.name, email: req.body.email, message: req.body.message });
    res.status(200).json(contact);
})

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(400);
        throw new Error('No such contact information');
    }

    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
})

module.exports = { getContacts, postContact, deleteContact };