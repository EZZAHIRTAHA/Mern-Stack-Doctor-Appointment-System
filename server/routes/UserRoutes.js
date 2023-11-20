const express = require('express');
const { getData, createUser } = require('../controllers/UserController');

const router = express.Router();

router.get('/', getData);
router.post('/create', createUser);

module.exports = router;
