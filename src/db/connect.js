const mongoose = require('mongoose');

const connectDb =  (URL) => {
   return mongoose.connect(URL)
}

module.exports = connectDb
