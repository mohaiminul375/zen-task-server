import { Router } from "express";
import { Todo } from "../models/todo.model.js";
const router = Router();



router.get('/all-todo/:email', async (req, res) => {
    try {
        const tasks = await Todo.find({ email: req.params.email });
        const groupedTasks = {
            todo: tasks.filter(task => task.status === 'To Do'),
            inProgress: tasks.filter(task => task.status === 'In Progress'),
            completed: tasks.filter(task => task.status === 'Completed'),
        };
        res.status(200).json(groupedTasks)
    } catch (error) {
        res.status(500).json({ message: `failed to get todo: ${error}` });
    }
})
// Post: create a todo
router.post('/create-todo', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();

        res.status(200).json({ success: true, message: 'todo was created' });
    } catch (error) {
        res.status(500).json({ message: `failed to create todo: ${error}` });
    }
})
// update a todo
router.patch('/update-todo/:id', async (req, res) => {
  
    try {
        await Todo.updateOne({ _id: req.params.id }, {
            $set: {
                ...req.body
            }
        })

        res.status(200).json({ success: true, message: 'todo was updated' });
    } catch (error) {
        res.status(500).json({ message: `failed to update todo: ${error}` });
    }

})
// delete a todo
router.delete('/:id', async (req, res) => {
    console.log('hited')
    try {
        await Todo.deleteOne({ _id: req.params.id })
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ message: `failed to delete todo: ${error}` });
    }
})
export default router;