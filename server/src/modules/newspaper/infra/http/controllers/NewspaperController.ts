import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateNewspaperService from '@modules/newspaper/services/CreateNewspaperService';
import ShowNewspaperService from '@modules/newspaper/services/ShowNewspaperService';
import ShowNewspaperByIdService from '@modules/newspaper/services/ShowNewspaperByIdService';

class postControllerCreate {
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    try {
      const { title, description } = request.body;

      const createNewspaperService = container.resolve(CreateNewspaperService);

      const newspaper = await createNewspaperService.create({
        title,
        description,
      });
      return response.json(newspaper);
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  }

  public async showAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const listAllNewspaper = container.resolve(ShowNewspaperService);

      const arrayListAllNewspaper = await listAllNewspaper.execute();
      return response.setTimeout(40000).json(arrayListAllNewspaper);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async showById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { id } = request.params;
      console.log(id);
      const showNewspaperByIdService = container.resolve(
        ShowNewspaperByIdService,
      );

      const newspaper = await showNewspaperByIdService.execute(id);

      return response.json(newspaper);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default postControllerCreate;
