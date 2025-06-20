import mongoose from "mongoose";


const todoModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    due_Date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Completed'],
        default: 'To Do',
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium',
    },
    tags: {
        type: [String],
        default: [],
    },
    email: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export const Todo = mongoose.model('Todo', todoModel);


