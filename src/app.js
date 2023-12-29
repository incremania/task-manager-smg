require('dotenv').config()
const express = require('express');
const app = express();
const taskRoute = require('./routes/task');
const connectDb = require('./db/connect');

// middleware
app.use(express.json());

app.use('/api/v1', taskRoute)

// db connection
const port = 3000
const startDb = async () => {
    try {
      await connectDb(process.env.MONGO_URI) 
      app.listen(port, () => {
        console.log('listening on port 3000 .....');
    }) 
    } catch (error) {
        console.log('this is the error ....', error);
    }
}

startDb()


