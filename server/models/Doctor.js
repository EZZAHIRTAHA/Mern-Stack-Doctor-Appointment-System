const mongoose = require('mongoose')



const doctorSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    website:{
        type: String,
        required: false,
    },
    address:{
        type: String,
        required: false,
        trim: true,
    },
    specialization:{
        type: String,
        required: true,
    },
    experience:{
        type: String,
        required: true,
    },
    feePerConsultation:{
        type: String,
        required: true,
    },
    timings:{
        type: Array,
        required: true,
    },
    status:{
        type: String,
        require: true,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Doctor', doctorSchema)
