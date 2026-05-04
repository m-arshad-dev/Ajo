import express from 'express';
import { checkDatabase } from './db.js';
import disasterRoutes from './routes/disasters.js';
import authRoutes from './routes/auth.js';
import donationRoutes from './routes/donations.js';

const app = express();
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
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import healthRoutes from './routes/healthRoutes.js';
import disasterRoutes from './routes/disasterRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', healthRoutes);
app.use('/api/disasters', disasterRoutes);

app.use(errorHandler);

export default app;
