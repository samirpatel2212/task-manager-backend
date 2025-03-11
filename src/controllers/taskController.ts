import { Request, Response } from "express";
import { getGlobalTasks } from "..";
import { Task } from "../types";
import {v4 as uuidv4} from 'uuid';

export const getTasks = (req: Request, res: Response) => {
  let page = 1;
  if (typeof req.query.page === 'string') {
    const pageNumber = parseInt(req.query.page);
    if (!isNaN(pageNumber) && pageNumber > 0) {
      page = pageNumber;
    }
  }
  const limit = 10; // Fixed limit for simplicity

  const tasksArray = Array.from(getGlobalTasks().values());
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedTasks = tasksArray.slice(startIndex, endIndex);
  res.json(paginatedTasks);
};

export const addTask = (req: Request, res: Response) => {
  const { title, description, status, priority, dueDate } = req.body;
  if (!title) {
    res.status(400).json({ error: "Title is required" });
    return;
  }
  const id = uuidv4();
  const newTask: Task = { id, title, description, status, priority, dueDate, createdAt: new Date(), updatedAt: new Date()};
  getGlobalTasks().set(id, newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;
  const task = getGlobalTasks().get(id);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
    return;
  }
  const updatedTask: Task = { ...task, updatedAt: new Date() };
  if (title !== undefined) {
    updatedTask.title = title;
  }
  if (description !== undefined) {
    updatedTask.description = description;
  }
  if (status !== undefined) {
    updatedTask.status = status;
  }
  if (dueDate !== undefined) {
    updatedTask.dueDate = dueDate;
  }
  if (priority !== undefined) {
    updatedTask.priority = priority;
  }
  
  getGlobalTasks().set(id, updatedTask);
  res.json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  if (!getGlobalTasks().has(id)) {
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  getGlobalTasks().delete(id);
  res.sendStatus(204);
  return;
};
