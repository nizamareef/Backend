const mongoose = require('mongoose');
const connect = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/?readPreference=primary',console.log("Connected to MongoDB") 
   
    )}
       

module.exports = connect;