const express = require('express');
const router = express.Router();
const {createTask, getAllTasks, getSingleTask, deleteTask, updateTask} = require('../controllers/task')

router
.get('/', getAllTasks)
.post('/', createTask)
.get('/task/:taskId', getSingleTask)
.patch('/task/:taskId', updateTask)
.delete('/task/:taskId', deleteTask)
module.exports = router