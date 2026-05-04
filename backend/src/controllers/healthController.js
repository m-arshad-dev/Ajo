import { pool } from '../db/pool.js';

export function health(_req, res) {
  res.json({ status: 'ok', service: 'reliefnet-backend' });
}

export async function readiness(_req, res, next) {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ready' });
  } catch (error) {
    next(error);
  }
}
