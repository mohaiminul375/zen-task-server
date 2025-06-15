import { Router } from "express";
import { Todo } from "../models/todo.model.js";
const router = Router();

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
export default router;