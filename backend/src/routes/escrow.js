import { Router } from 'express';
import { ngoConfirmEscrow, victimConfirmEscrow } from '../controllers/escrowController.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();
router.patch('/:donationId/ngo-confirm', requireAuth, requireRole('ngo'), ngoConfirmEscrow);
router.patch('/:donationId/victim-confirm', requireAuth, requireRole('victim'), victimConfirmEscrow);

export default router;
