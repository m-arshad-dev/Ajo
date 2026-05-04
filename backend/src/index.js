import express from 'express';
import dotenv from 'dotenv';
import { checkDatabase } from './db.js';
import { runMigrations } from './services/migrate.js';
import disasterRoutes from './routes/disasters.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/health', async (_req, res) => {
  try {
    const db = await checkDatabase();
    res.status(200).json({
      status: 'ok',
      service: 'reliefnet-backend',
      database: 'connected',
      timestamp: db.now
    });
  } catch {
    res.status(500).json({
      status: 'error',
      service: 'reliefnet-backend',
      database: 'disconnected'
    });
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/disasters', disasterRoutes);
app.use('/api/donations', donationRoutes);

async function boot() {
  await runMigrations();
  app.listen(port, () => {
    console.log(`ReliefNet backend running on port ${port}`);
  });
}

boot().catch((error) => {
  console.error('Failed to start backend', error);
  process.exit(1);
});
