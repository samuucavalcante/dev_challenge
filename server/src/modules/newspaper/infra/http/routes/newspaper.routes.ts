import { Router } from 'express';

import PostController from '../controllers/NewspaperController';

const postRouter = Router();
const postController = new PostController();
postRouter.post('/', postController.create);
postRouter.get('/', postController.show);

export default postRouter;
