import { pool } from '../db.js';

export async function createInventoryItem(req, res) {
  const { disasterId, itemName, quantity, unit = 'units' } = req.body;
  const ngoId = req.user.id;

  const result = await pool.query(
    `INSERT INTO inventory_items (ngo_id, disaster_id, item_name, quantity, unit)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, ngo_id, disaster_id, item_name, quantity, unit, created_at`,
    [ngoId, disasterId, itemName, quantity, unit]
  );

  res.status(201).json(result.rows[0]);
}

export async function listInventory(req, res) {
  const result = await pool.query(
    `SELECT id, ngo_id, disaster_id, item_name, quantity, unit, created_at
     FROM inventory_items ORDER BY created_at DESC`
  );
  res.json(result.rows);
}
