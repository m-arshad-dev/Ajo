import { pool } from '../db.js';

export async function createHelpRequest(req, res) {
  const victimId = req.user.id;
  const { disasterId, requestType, details = null, priority = 'medium' } = req.body;

  if (!disasterId || !requestType) {
    return res.status(400).json({ error: 'disasterId and requestType are required' });
  }

  const result = await pool.query(
    `INSERT INTO help_requests (victim_id, disaster_id, request_type, details, priority)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, victim_id, disaster_id, request_type, details, priority, status, created_at`,
    [victimId, disasterId, requestType, details, priority]
  );

  return res.status(201).json(result.rows[0]);
}

export async function listHelpRequests(_req, res) {
  const result = await pool.query(
    `SELECT id, victim_id, disaster_id, request_type, details, priority, status, created_at
     FROM help_requests
     ORDER BY created_at DESC`
  );
  return res.json(result.rows);
}

export async function updateHelpRequestStatus(req, res) {
  const { requestId } = req.params;
  const { status } = req.body;

  const result = await pool.query(
    `UPDATE help_requests SET status = $1 WHERE id = $2
     RETURNING id, victim_id, disaster_id, request_type, priority, status, created_at`,
    [status, requestId]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ error: 'Help request not found' });
  }

  return res.json(result.rows[0]);
}
