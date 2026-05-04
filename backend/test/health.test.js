import request from 'supertest';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../src/db.js', () => ({
  checkDatabase: vi.fn()
}));

import app from '../src/app.js';
import { checkDatabase } from '../src/db.js';

describe('GET /health', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 200 when db is connected', async () => {
    checkDatabase.mockResolvedValue({ now: '2026-01-01T00:00:00Z' });

    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.database).toBe('connected');
  });

  it('returns 500 when db check fails', async () => {
    checkDatabase.mockRejectedValue(new Error('db down'));

    const res = await request(app).get('/health');

    expect(res.status).toBe(500);
    expect(res.body.status).toBe('error');
    expect(res.body.database).toBe('disconnected');
  });
});
