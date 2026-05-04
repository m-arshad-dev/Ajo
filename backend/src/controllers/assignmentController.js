import { pool } from '../db.js';

export async function createAssignment(req, res) {
  const adminId = req.user.id;
  const { volunteerId, disasterId, notes = null } = req.body;

  if (!volunteerId || !disasterId) {
    return res.status(400).json({ error: 'volunteerId and disasterId are required' });
  }

  const result = await pool.query(
    `INSERT INTO volunteer_assignments (volunteer_id, disaster_id, assigned_by, notes)
     VALUES ($1, $2, $3, $4)
     RETURNING id, volunteer_id, disaster_id, assigned_by, status, notes, created_at`,
    [volunteerId, disasterId, adminId, notes]
  );

  return res.status(201).json(result.rows[0]);
}

export async function listAssignments(req, res) {
  const { role, id } = req.user;

  const query = role === 'volunteer'
    ? `SELECT id, volunteer_id, disaster_id, assigned_by, status, notes, created_at
       FROM volunteer_assignments WHERE volunteer_id = $1 ORDER BY created_at DESC`
    : `SELECT id, volunteer_id, disaster_id, assigned_by, status, notes, created_at
       FROM volunteer_assignments ORDER BY created_at DESC`;

  const values = role === 'volunteer' ? [id] : [];
  const result = await pool.query(query, values);
  return res.json(result.rows);
}

export async function updateAssignmentStatus(req, res) {
  const { assignmentId } = req.params;
  const { status } = req.body;

  const result = await pool.query(
    `UPDATE volunteer_assignments SET status = $1 WHERE id = $2
     RETURNING id, volunteer_id, disaster_id, assigned_by, status, notes, created_at`,
    [status, assignmentId]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ error: 'Assignment not found' });
  }

  return res.json(result.rows[0]);
}
