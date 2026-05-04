import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../src/app.js';

describe('POST /api/auth/register', () => {
  it('returns 400 when required fields are missing', async () => {
    const res = await request(app).post('/api/auth/register').send({ email: 'x@example.com' });

    expect(res.status).toBe(400);
    expect(res.body.error).toContain('required');
  });
});
