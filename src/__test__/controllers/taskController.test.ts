import request from 'supertest';
import app from '../../index'

describe('Task Controller', () => {

  describe('getTasks', () => {
    it('GET /tasks should return a list of tasks', async() => {
      const response = await request(app).get('/tasks');
      expect(response.status).toBe(200);
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