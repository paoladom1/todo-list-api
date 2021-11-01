import { Router } from 'express';

import {
  getAllActivities,
  createActivity,
  deleteActivity,
} from '../controllers/activities';

const router = Router();

router.get('/', getAllActivities);
router.post('/', createActivity);
router.delete('/:id', deleteActivity);

export default router;
