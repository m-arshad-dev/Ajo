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
