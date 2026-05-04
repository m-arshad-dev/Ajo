import { pool } from '../db.js';

export async function createDonation(req, res) {
  const { disasterId, donationType, amount = null, itemDescription = null } = req.body;
  const donorId = req.user.id;

  if (!disasterId || !donationType) {
    return res.status(400).json({ error: 'disasterId and donationType are required' });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const donationResult = await client.query(
      `INSERT INTO donations (donor_id, disaster_id, donation_type, amount, item_description)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, donor_id, disaster_id, donation_type, amount, item_description, status, created_at`,
      [donorId, disasterId, donationType, amount, itemDescription]
    );

    const donation = donationResult.rows[0];

    await client.query(
      `INSERT INTO escrow_transactions (donation_id, status)
       VALUES ($1, 'held')`,
      [donation.id]
    );

    await client.query('COMMIT');
    return res.status(201).json(donation);
  } catch {
    await client.query('ROLLBACK');
    return res.status(500).json({ error: 'Failed to create donation' });
  } finally {
    client.release();
  }
}

export async function approveEscrow(req, res) {
  const { donationId } = req.params;
  const adminId = req.user.id;

  const result = await pool.query(
    `UPDATE escrow_transactions
     SET status = 'approved', approved_by = $1, released_at = NOW()
     WHERE donation_id = $2
     RETURNING id, donation_id, status, approved_by, released_at`,
    [adminId, donationId]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ error: 'Escrow record not found' });
  }

  await pool.query(`UPDATE donations SET status = 'approved' WHERE id = $1`, [donationId]);

  return res.json(result.rows[0]);
}
