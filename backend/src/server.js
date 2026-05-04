import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb, pool } from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', db: 'connected' });
  } catch {
    res.status(500).json({ status: 'error', db: 'disconnected' });
  }
});

app.get('/api/disasters', async (_req, res) => {
  const result = await pool.query(
    'SELECT id, title, location, severity, status, created_at FROM disasters ORDER BY id DESC'
  );
  res.json(result.rows);
});

app.post('/api/disasters', async (req, res) => {
  const { title, location, severity } = req.body;
  if (!title || !location || !severity) {
    return res.status(400).json({ error: 'title, location, and severity are required' });
  }

  const result = await pool.query(
    'INSERT INTO disasters (title, location, severity) VALUES ($1, $2, $3) RETURNING *',
    [title, location, severity]
  );

  return res.status(201).json(result.rows[0]);
});

const port = process.env.PORT || 4000;

async function start() {
  await initDb();
  app.listen(port, () => {
    console.log(`ReliefNet backend running on http://localhost:${port}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});
