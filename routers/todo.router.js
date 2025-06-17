import { Router } from "express";
import { Todo } from "../models/todo.model.js";
const router = Router();





// get dashboard summary
router.get('/dashboard/:email', async (req, res) => {
    try {
        const { email } = req.params;
        // today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // tomorrow
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        // day after tomorrow
        const dayAfterTomorrow = new Date(tomorrow);
        dayAfterTomorrow.setDate(tomorrow.getDate() + 1);

        // get all task
        const totalTasks = await Todo.find({ email });

        //   get today task
        const todaysTasks = await Todo.find({
            email,
            due_Date: {
                $gte: today,
                $lt: tomorrow
            }
        });

        // get tomorrow task
        const tomorrowsTasks = await Todo.find({
            email,
            due_Date: {
                $gte: tomorrow,
                $lt: dayAfterTomorrow
            }
        });

        res.status(200).json({
            totalTasksCount: totalTasks.length,
            todaysTasksCount: todaysTasks.length,
            tomorrowsTasksCount: tomorrowsTasks.length,
        });

    } catch (error) {
        res.status(500).json({ error: 'Server error', message: error.message });
    }
});
// get all to by email
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
// update a todo
router.patch('/update-todo-dnd/:id', async (req, res) => {
    try {
        const { status } = req.body
        console.log(req.params.id, status)
        await Todo.updateOne({ _id: req.params.id }, {
            $set: {
                status: status
            }
        })
        res.status(200).json({ success: true, message: 'todo was updated' });
    } catch (error) {
        res.status(500).json({ message: `failed to update todo: ${error}` });
    }

})
// delete a todo
router.delete('/:id', async (req, res) => {

    try {
        await Todo.deleteOne({ _id: req.params.id })
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ message: `failed to delete todo: ${error}` });
    }
})
export default router;