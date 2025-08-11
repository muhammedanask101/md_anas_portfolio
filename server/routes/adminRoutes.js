const express = require('express');
const router = express.Router();
const { loginAdmin, getCurrentAdmin } = require('../controllers/adminController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/login', loginAdmin);
router.get('/currentadmin', getCurrentAdmin);

module.exports = router;
