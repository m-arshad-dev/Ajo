import app from './app.js';
import { env } from './config/env.js';

app.listen(env.port, () => {
  console.log(`ReliefNet backend running on port ${env.port}`);
});
