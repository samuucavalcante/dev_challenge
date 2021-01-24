import { Router } from 'express';

import PostController from '../controllers/NewspaperController';

const postRouter = Router();
const postController = new PostController();
postRouter.post('/', postController.create);
postRouter.get('/', postController.showAll);
postRouter.get('/:id', postController.showById);
export default postRouter;
