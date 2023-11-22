const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt')

const loginUser = asyncHandler(async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    } catch (error) {
        
    }
});



const registerUser = asyncHandler(async (req, res) => {

});



const logoutUser = asyncHandler(async (req, res) => {

});



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
    loginUser,
    registerUser,
    logoutUser,
    getData,
    createUser,
};
