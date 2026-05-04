import { Router } from 'express';
import { createInventoryItem, listInventory } from '../controllers/inventoryController.js';
import { requireAuth, requireRole } from '../middleware/auth.js';
import { validateRequired } from '../middleware/validate.js';

const router = Router();
router.get('/', requireAuth, requireRole('admin', 'ngo'), listInventory);
router.post('/', requireAuth, requireRole('ngo'), validateRequired(['disasterId', 'itemName', 'quantity']), createInventoryItem);

export default router;
