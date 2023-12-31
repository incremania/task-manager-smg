require('dotenv').config()
const express = require('express');
const app = express();
const taskRoute = require('./routes/task');
const connectDb = require('./db/connect');
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler');


// middleware
app.use(express.json());
app.use('/api/v1', taskRoute)
app.use(notFound)
app.use(errorHandler)


// db connection
const port = process.env.PORT || 3000
const startDb = async () => {
    try {
      await connectDb(process.env.MONGO_URI_LOCAL) 
      app.listen(port, () => {
        console.log('listening on port 3000 .....');
    }) 
    } catch (error) {
        console.log('this is the error ....', error);
    }
}

startDb()


