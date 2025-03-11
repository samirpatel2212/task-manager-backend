import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';
import { initializeTasksMap } from './storeInitializer';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

const globalTasks = new Map();
initializeTasksMap(globalTasks);

export const getGlobalTasks = () => globalTasks;

app.get('/', (req, res) => {
  res.send('Task Manager API is running');
});


export default app;