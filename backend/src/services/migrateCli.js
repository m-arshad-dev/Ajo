import { runMigrations } from './migrate.js';
import { pool } from '../db.js';

runMigrations()
  .then(() => {
    console.log('Migrations completed');
    return pool.end();
  })
  .catch(async (error) => {
    console.error('Migration failed', error);
    await pool.end();
    process.exit(1);
  });
