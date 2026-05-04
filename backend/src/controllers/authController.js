import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';

export async function register(req, res) {
  const { role, fullName, email, password } = req.body;

  if (!role || !fullName || !email || !password) {
    return res.status(400).json({ error: 'role, fullName, email, password are required' });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      `INSERT INTO users (role, full_name, email, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING id, role, full_name, email, created_at`,
      [role, fullName, email, passwordHash]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Email already registered' });
    }
    return res.status(500).json({ error: 'Registration failed' });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  const result = await pool.query('SELECT id, role, full_name, email, password_hash FROM users WHERE email = $1', [email]);
  const user = result.rows[0];

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role, email: user.email, fullName: user.full_name },
    process.env.JWT_SECRET || 'dev-secret',
    { expiresIn: '12h' }
  );

  return res.json({
    token,
    user: { id: user.id, role: user.role, email: user.email, fullName: user.full_name }
  });
}
