import { Router } from 'express';

import CommentsController from '../controllers/CommentsController';

const commentsRouter = Router();
const commentsController = new CommentsController();
commentsRouter.post('/', commentsController.create);
commentsRouter.get('/', commentsController.show);

export default commentsRouter;
