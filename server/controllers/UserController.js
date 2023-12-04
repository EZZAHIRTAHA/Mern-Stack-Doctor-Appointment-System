const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')
const colors = require('colors');
const jwt = require('jsonwebtoken');


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
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: 'User Not Found', success: false });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ message: 'Invalid Credentials', success: false });
    }

    // If the user and password are correct, generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // You can also send additional user information if needed
    res.status(200).json({
      message: 'Login Successful',
      success: true,
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        // Add any other user information you want to include
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message, success: false });
  }
});


const getUserInfoById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId});
    if(!user) {
      res.status(404).json({ message: 'User Not Found', success: false });
    }else {
      res.status(200).json({
        // message: 'User Found',
        success: true,
        user: {
          _id: user._id,
          username: user.name,
          email: user.email,
          // Add any other user information you want to include
        },
      });
    }
  } catch (error) {  
    res.status(500).json({ message: error.message, success: false });
  }
})

 


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
    getUserInfoById
};
