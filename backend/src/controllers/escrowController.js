import { pool } from '../db.js';

export async function ngoConfirmEscrow(req, res) {
  const { donationId } = req.params;
  const result = await pool.query(
    `UPDATE escrow_transactions
     SET verification_status = 'pending_victim', ngo_confirmed_at = NOW()
     WHERE donation_id = $1
     RETURNING id, donation_id, verification_status, ngo_confirmed_at, victim_confirmed_at`,
    [donationId]
  );

  if (!result.rowCount) return res.status(404).json({ error: 'Escrow not found' });
  return res.json(result.rows[0]);
}

export async function victimConfirmEscrow(req, res) {
  const { donationId } = req.params;
  const result = await pool.query(
    `UPDATE escrow_transactions
     SET verification_status = 'completed', victim_confirmed_at = NOW(), status = 'released'
     WHERE donation_id = $1
     RETURNING id, donation_id, status, verification_status, ngo_confirmed_at, victim_confirmed_at`,
    [donationId]
  );

  if (!result.rowCount) return res.status(404).json({ error: 'Escrow not found' });
  await pool.query(`UPDATE donations SET status = 'completed' WHERE id = $1`, [donationId]);
  return res.json(result.rows[0]);
}
