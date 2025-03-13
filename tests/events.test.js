const request = require('supertest');
const app = require('../index');

describe('Event API', () => {
  it('should create a new event', async () => {
    const res = await request(app)
      .post('/api/events')
      .send({
        name: 'Team Meeting',
        description: 'Discuss project updates',
        date: '2025-04-01',
        time: '10:00',
        category: 'Meetings',
        reminder: true,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Team Meeting');
  });
});
