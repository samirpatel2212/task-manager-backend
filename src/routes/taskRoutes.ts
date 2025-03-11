import express from 'express';
import { getTasks, addTask, updateTask, deleteTask } from '../controllers/taskController'
const router = express.Router();
router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
