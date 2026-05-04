import { Router } from 'express';
import { createHelpRequest, listHelpRequests, updateHelpRequestStatus } from '../controllers/helpRequestController.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

router.post('/', requireAuth, requireRole('victim'), createHelpRequest);
router.get('/', requireAuth, requireRole('admin', 'ngo'), listHelpRequests);
router.patch('/:requestId/status', requireAuth, requireRole('admin', 'ngo'), updateHelpRequestStatus);

export default router;
