import { Router } from 'express';
import { createDisaster, listDisasters } from '../controllers/disasterController.js';

const router = Router();

router.get('/', listDisasters);
router.post('/', createDisaster);

export default router;
