const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')
const colors = require('colors');


const registerUser = asyncHandler(async (req, res) => {
    try {
        const userExist = await User.findOne({email: req.body.email});
        if(userExist){
            res.status(400).json({message: 'User Already Exist', success: false});
        }
        const password = req.body.password; 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ ...req.body, password: hashedPassword });
        await newUser.save();
        res.status(200).
        json({message: 
            `Account Created Successfully`, success: true});

    } catch (error) {
        res.status(500).json({message: error.message, success: false, });
    }
});



const loginUser = asyncHandler(async (req, res) => {
    try {
        
    } catch (error) {
        
    }
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
