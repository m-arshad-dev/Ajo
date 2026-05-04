import dotenv from 'dotenv';
import app from './app.js';
import { runMigrations } from './services/migrate.js';

dotenv.config();
const port = process.env.PORT || 4000;

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
