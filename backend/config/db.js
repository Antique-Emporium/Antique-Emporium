if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const MONGO_URI = process.env.MONGO_URI;
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.info("Connection to MongoDB succeeded.");
    } catch (error) {
        console.error("There was an error: ", error);
    }
}

mongoose.set('useCreateIndex', true);

module.exports = connectDB;