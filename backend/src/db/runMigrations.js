import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './pool.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const sqlPath = path.resolve(__dirname, '../../sql/001_init.sql');
  const sql = await fs.readFile(sqlPath, 'utf-8');
  await pool.query(sql);
  console.log('Migration applied: 001_init.sql');
  await pool.end();
}

run().catch(async (error) => {
  console.error('Migration failed:', error.message);
  await pool.end();
  process.exit(1);
});
