import { Router } from 'express';
import { createAssignment, listAssignments, updateAssignmentStatus } from '../controllers/assignmentController.js';
import { requireAuth, requireRole } from '../middleware/auth.js';

const router = Router();

router.post('/', requireAuth, requireRole('admin'), createAssignment);
router.get('/', requireAuth, requireRole('admin', 'ngo', 'volunteer'), listAssignments);
router.patch('/:assignmentId/status', requireAuth, requireRole('admin', 'volunteer'), updateAssignmentStatus);

export default router;
