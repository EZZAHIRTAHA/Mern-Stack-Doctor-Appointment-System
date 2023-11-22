const express = require('express');
const { getData, createUser, loginUser, registerUser } = require('../controllers/UserController');

const router = express.Router();

router.get('/', getData);

router.post('/create', createUser)
.post('/login', loginUser)
.post('/register', registerUser);

module.exports = router;
