const { Schema, default: mongoose } = require('mongoose');

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please provide a name'],
        trim: true

    },
    completed: {
        type: Boolean,
        default: false
    }
})

const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel