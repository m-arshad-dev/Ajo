CREATE TABLE IF NOT EXISTS help_requests (
  id SERIAL PRIMARY KEY,
  victim_id INT NOT NULL REFERENCES users(id),
  disaster_id INT NOT NULL REFERENCES disasters(id),
  request_type VARCHAR(30) NOT NULL,
  details TEXT,
  priority VARCHAR(20) NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  status VARCHAR(20) NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'fulfilled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS volunteer_assignments (
  id SERIAL PRIMARY KEY,
  volunteer_id INT NOT NULL REFERENCES users(id),
  disaster_id INT NOT NULL REFERENCES disasters(id),
  assigned_by INT REFERENCES users(id),
  status VARCHAR(20) NOT NULL DEFAULT 'assigned' CHECK (status IN ('assigned', 'accepted', 'completed')),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
