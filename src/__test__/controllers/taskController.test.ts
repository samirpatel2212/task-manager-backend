import request from 'supertest';
import express, { Express } from 'express';
import { getGlobalTasks } from '../../index';
import { Task } from '../../types';
import taskRoutes from '../../../src/routes/taskRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid');

describe('Task Controller', () => {
  let initialTasks: Map<string, Task>;
  let tasks: Map<string, Task>;

  let app: Express;

  beforeEach(() => {

    (uuidv4 as jest.Mock).mockReturnValue('new-uuid');
    app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/tasks', taskRoutes);
    initialTasks = getGlobalTasks();
    tasks = new Map(JSON.parse(JSON.stringify(Array.from(initialTasks))));
  });

  describe('getTasks', () => {
    it('GET /tasks should return a list of tasks', async() => {
      const response = await request(app).get('/tasks');
      expect(response.status).toBe(200);
      console.log(`asdasd`,response.body);

      expect(Array.isArray(response.body)).toBe(true);
    });
    it('POST /tasks should create a task', async() => {
      const response = await request(app).post('/tasks').send({ title: 'New Task', description: 'Desc' });;
      expect(response.status).toBe(201);
      expect(response.body.id).not.toBe(undefined);
    });
    it('POST /tasks should reject a request when title is missing', async() => {
      const response = await request(app).post('/tasks').send({ description: 'Desc' });;
      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Title is required');
    });
  });
});