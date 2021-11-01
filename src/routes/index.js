import { Router } from 'express';

import activitiesRouter from './activities';

const router = Router();

router.get('/', (req, res) => {
    res.json('Search for /activities');
})
router.use('/activities', activitiesRouter);

export default router;