import { Request, Response } from 'express';

import CreateCommentsService from '@modules/newspaper/services/CreateCommentsService';

import ShowCommentsService from '@modules/newspaper/services/ShowCommentsService';

import { container } from 'tsyringe';

class CommentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { id, description } = request.body;

      const createCommentsService = container.resolve(CreateCommentsService);

      const comment = await createCommentsService.execute({
        id,
        description,
      });

      return response.json(comment);
    } catch (err) {
      return response.json({ err: err.message }).status(400);
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const listAllComments = container.resolve(ShowCommentsService);

      const arrayListAllComments = await listAllComments.execute();
      return response.json(arrayListAllComments);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default CommentsController;
