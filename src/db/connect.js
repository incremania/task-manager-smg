const mongoose = require('mongoose');

const connectDb =  (URL) => {
   return mongoose.connect(URL, {
      family: 4
   })
}

module.exports = connectDb
