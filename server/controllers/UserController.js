const User = require('../models/User');
const asyncHandler = require('express-async-handler');


const getData = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});


const createUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = {
    getData,
    createUser
};
