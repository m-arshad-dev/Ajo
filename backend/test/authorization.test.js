import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../src/app.js';

describe('authorization guards', () => {
  it('blocks donation creation without token', async () => {
    const res = await request(app).post('/api/donations').send({ disasterId: 1, donationType: 'money', amount: 200 });
    expect(res.status).toBe(401);
  });

  it('blocks help request creation without token', async () => {
    const res = await request(app).post('/api/help-requests').send({ disasterId: 1, requestType: 'food' });
    expect(res.status).toBe(401);
  });
});
