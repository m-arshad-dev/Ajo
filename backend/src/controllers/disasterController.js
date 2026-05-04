import { pool } from '../db/pool.js';

export async function listDisasters(_req, res, next) {
  try {
    const result = await pool.query(
      'SELECT id, title, location, severity, status, created_at FROM disasters ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
}

export async function createDisaster(req, res, next) {
  try {
    const { title, location, severity } = req.body;
    const result = await pool.query(
      'INSERT INTO disasters (title, location, severity) VALUES ($1, $2, $3) RETURNING id, title, location, severity, status, created_at',
      [title, location, severity]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
}
