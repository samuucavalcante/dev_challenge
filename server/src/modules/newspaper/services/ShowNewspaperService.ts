import { injectable, inject } from 'tsyringe';

import INewspaperRepository from '../repositories/INewspaperRepository';
import INewspaper from '../models/INewspaper';

@injectable()
class ShowNewspaperService {
  constructor(
    @inject('NewspaperRepository')
    private newspaperRepository: INewspaperRepository,
  ) {}

  public async execute(): Promise<INewspaper[]> {
    const response = await this.newspaperRepository.listAllNewsPapper();

    return response;
  }
}

export default ShowNewspaperService;
