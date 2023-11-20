
const mongoose = require('mongoose');

const connectDb = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mernHis');

        console.log('➜ Database:    '.bold +  `mongodb://${mongoose.connection.host}:${mongoose.connection.port}`.green.underline);

    } catch (err) {

        console.error('⚠️ Error connecting to the database:'.red.bold, err.message);
    
    }
};

module.exports = connectDb;
