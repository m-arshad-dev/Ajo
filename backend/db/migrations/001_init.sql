CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  role VARCHAR(20) NOT NULL CHECK (role IN ('donor', 'volunteer', 'ngo', 'admin', 'victim')),
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(160) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS disasters (
  id SERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  location VARCHAR(180) NOT NULL,
  severity VARCHAR(20) NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'resolved', 'archived')),
  created_by INT REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS donations (
  id SERIAL PRIMARY KEY,
  donor_id INT NOT NULL REFERENCES users(id),
  disaster_id INT NOT NULL REFERENCES disasters(id),
  donation_type VARCHAR(10) NOT NULL CHECK (donation_type IN ('money', 'item')),
  amount NUMERIC(12,2),
  item_description TEXT,
  status VARCHAR(30) NOT NULL DEFAULT 'pending_approval',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS escrow_transactions (
  id SERIAL PRIMARY KEY,
  donation_id INT NOT NULL UNIQUE REFERENCES donations(id),
  status VARCHAR(30) NOT NULL DEFAULT 'held',
  approved_by INT REFERENCES users(id),
  released_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
