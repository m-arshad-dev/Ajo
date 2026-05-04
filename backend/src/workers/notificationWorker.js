/* eslint-disable no-console */
import { setInterval } from 'timers';

function runNotificationWorker() {
  console.log('[worker] notification worker started');
  setInterval(() => {
    console.log('[worker] polling queued notifications...');
  }, 15000);
}

runNotificationWorker();
