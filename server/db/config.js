const mongoose = require('mongoose');

require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // Other mongoose options if needed
        });

        console.log('➜ Database:    '.bold +  `Connected to MongoDB Cloud`.green.underline);
        console.log('➜ Author:    '.bold +  "Ezzahir Taha".rainbow.bold);
    } catch (err) {
        console.error('⚠️ Error connecting to the database:'.red.bold, err.message);
    }
};

module.exports = connectDb;
