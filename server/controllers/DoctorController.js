const Doctor = require('../models/Doctor')
const asyncHandler = require('express-async-handler')






const getDoctors = asyncHandler(async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = {  
    getDoctors 
}