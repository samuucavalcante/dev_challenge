import { injectable, inject } from 'tsyringe';

import Newspaper from '../infra/typeorm/entities/Newspaper';
import INewspaperRepository from '../repositories/INewspaperRepository';

interface IRequest {
  title: string;
  description: string;
}

@injectable()
class CreateNewspaperService {
  constructor(
    @inject('NewspaperRepository')
    private newspaperRepository: INewspaperRepository,
  ) {}

  public async create({ title, description }: IRequest): Promise<Newspaper> {
    const newspaper = await this.newspaperRepository.create({
      title,
      description,
    });

    return newspaper;
  }
}

export default CreateNewspaperService;
