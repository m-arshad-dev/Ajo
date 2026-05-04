import { pool } from '../db.js';

export async function createDisaster(req, res) {
  const { title, location, severity = 'medium', createdBy = null } = req.body;

  if (!title || !location) {
    return res.status(400).json({ error: 'title and location are required' });
  }

  const result = await pool.query(
    `INSERT INTO disasters (title, location, severity, created_by)
     VALUES ($1, $2, $3, $4)
     RETURNING id, title, location, severity, status, created_at`,
    [title, location, severity, createdBy]
  );

  return res.status(201).json(result.rows[0]);

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


