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
    consultationHours:{
        type: Object,
        required: true,
    },
    fromTime:{
        type: String,
        required: true,
    },
    toTime:{
        type: String,
        required: true,
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Doctor', doctorSchema)
