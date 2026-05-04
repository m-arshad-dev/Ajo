import { Router } from 'express';
import { createDisaster, listDisasters } from '../controllers/disasterController.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

router.get('/', listDisasters);
router.post('/', requireAuth, requireRole('admin'), createDisaster);
router.post('/', createDisaster);

export default router;
