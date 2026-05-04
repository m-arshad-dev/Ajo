import express from 'express';
import { checkDatabase } from './db.js';
import disasterRoutes from './routes/disasters.js';
import authRoutes from './routes/auth.js';
import donationRoutes from './routes/donations.js';
import helpRequestRoutes from './routes/helpRequests.js';
import assignmentRoutes from './routes/assignments.js';
import inventoryRoutes from './routes/inventory.js';
import escrowRoutes from './routes/escrow.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();
app.use(express.json());
import cors from 'cors';
import helmet from 'helmet';
import healthRoutes from './routes/healthRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';



const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(errorHandler);


app.get('/health', async (_req, res) => {
  try {
    const db = await checkDatabase();
    res.status(200).json({ status: 'ok', service: 'reliefnet-backend', database: 'connected', timestamp: db.now });
  } catch {
    res.status(500).json({ status: 'error', service: 'reliefnet-backend', database: 'disconnected' });
  }
});
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
app.use('/api', healthRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/disasters', disasterRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/help-requests', helpRequestRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/escrow', escrowRoutes);

app.use(notFoundHandler);
app.use(errorHandler);





export default app;
