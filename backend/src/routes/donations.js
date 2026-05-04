import { Router } from 'express';
import { approveEscrow, createDonation } from '../controllers/donationController.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

router.post('/', requireAuth, requireRole('donor'), createDonation);
router.patch('/:donationId/approve', requireAuth, requireRole('admin'), approveEscrow);

export default router;
