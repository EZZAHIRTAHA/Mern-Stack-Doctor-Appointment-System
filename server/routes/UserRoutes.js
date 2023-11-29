const express = require('express');
const { getData, createUser, loginUser, registerUser, getUserInfoById } = require('../controllers/UserController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', getData);

router.post('/create', createUser)
.post('/login', loginUser)
.post('/register', registerUser)
.post('/get-user-info-by-id', authMiddleware, getUserInfoById);

module.exports = router;
