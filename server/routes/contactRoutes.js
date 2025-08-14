const express = require('express');
const router = express.Router();
const { getContacts, postContact, deleteContact } = require('../controllers/contactController');
const { protect } = require('../middlewares/authMiddleware'); 

router.get('/', protect, getContacts);
router.post('/', postContact);
router.delete('/:id', protect, deleteContact);

module.exports = router;