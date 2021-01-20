import { Router } from 'express';

import postRouter from '@modules/newspaper/infra/http/routes/newspaper.routes';

const router = Router();

router.use('/newspaper', postRouter);

export default router;
