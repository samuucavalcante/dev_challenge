import { injectable, inject } from 'tsyringe';

import Newspaper from '../infra/typeorm/entities/Newspaper';

import NewspaperRepository from '../repositories/INewspaperRepository';

@injectable()
class ShowNewspaperByIdService {
  constructor(
    @inject('NewspaperRepository')
    private newspaperRepository: NewspaperRepository,
  ) {}

  public async execute(id: string): Promise<Newspaper | undefined> {
    const response = this.newspaperRepository.findById(id);
    if (!response) {
      throw new Error('Newspaper does not exist');
    }

    return response;
  }
}

export default ShowNewspaperByIdService;
