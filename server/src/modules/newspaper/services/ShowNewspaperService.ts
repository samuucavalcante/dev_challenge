import { injectable, inject } from 'tsyringe';

import INewspaperRepository from '../repositories/INewspaperRepository';
import Newspaper from '../infra/typeorm/entities/Newspaper';

@injectable()
class ShowNewspaperService {
  constructor(
    @inject('NewspaperRepository')
    private newspaperRepository: INewspaperRepository,
  ) {}

  public async execute(): Promise<Newspaper[]> {
    const response = await this.newspaperRepository.listAllNewsPapper();

    return response;
  }
}

export default ShowNewspaperService;
