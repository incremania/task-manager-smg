const Task = require('../models/tasks')
const asyncWrapper = require('../middlewares/asyncwrapper')
const getAllTasks = asyncWrapper(async ( req, res ) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks})
  
})

const createTask = asyncWrapper(async ( req, res ) => {
  
        const task = await Task.create(req.body);
        res.status(201).json({ task })
   
   
})
const getSingleTask =asyncWrapper(async ( req, res ) => {
        const { taskId } = req.params;
        const task = await Task.findOne({ _id: taskId})
        if(!task) {
         return res.status(404).json({ msg: 'no task found'})
        }
        res.status(200).json({ task })
     
})

const updateTask =asyncWrapper(async ( req, res ) => {
        const { taskId } = req.params;
        const { completed, name } = req.body;
        const task = await Task.findOneAndUpdate({ _id: taskId},
             {completed, name}, {new: true, runValidators: true})
        if(!task) {
         return res.status(404).json({ msg: 'no task found'})
        }
        res.status(200).json({ task })
   
})

const deleteTask = asyncWrapper(async ( req, res ) => {
        const { taskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskId}, )
        if(!task) {
         return res.status(404).json({ msg: 'no task found'})
        }
        res.status(200).json({ msg: "task deleted"})
})


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}