ALTER TABLE escrow_transactions
  ADD COLUMN IF NOT EXISTS verification_status VARCHAR(30) NOT NULL DEFAULT 'pending_admin',
  ADD COLUMN IF NOT EXISTS ngo_confirmed_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS victim_confirmed_at TIMESTAMPTZ;

CREATE TABLE IF NOT EXISTS inventory_items (
  id SERIAL PRIMARY KEY,
  ngo_id INT REFERENCES users(id),
  disaster_id INT REFERENCES disasters(id),
  item_name VARCHAR(120) NOT NULL,
  quantity INT NOT NULL CHECK (quantity >= 0),
  unit VARCHAR(40) NOT NULL DEFAULT 'units',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
