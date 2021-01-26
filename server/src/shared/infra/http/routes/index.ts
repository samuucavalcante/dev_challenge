import { Router } from 'express';

import postRouter from '@modules/newspaper/infra/http/routes/newspaper.routes';
import commentsRouter from '@modules/newspaper/infra/http/routes/comments.routes';

const router = Router();

router.use('/newspaper', postRouter);
router.use('/comments', commentsRouter);

export default router;
