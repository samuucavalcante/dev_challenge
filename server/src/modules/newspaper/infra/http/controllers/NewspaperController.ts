import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateNewspaperService from '@modules/newspaper/services/CreateNewspaperService';
import ShowNewspaperService from '@modules/newspaper/services/ShowNewspaperService';

class postControllerCreate {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { title, description } = request.body;

      const createNewspaperService = container.resolve(CreateNewspaperService);

      const newspaper = await createNewspaperService.create({
        title,
        description,
      });
      return response.json(newspaper);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const listAllNewspaper = container.resolve(ShowNewspaperService);

      const arrayListAllNewspaper = await listAllNewspaper.execute();
      return response.json(arrayListAllNewspaper);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default postControllerCreate;
