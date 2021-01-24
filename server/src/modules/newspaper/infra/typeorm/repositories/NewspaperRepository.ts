import { getRepository, Repository } from 'typeorm';

import INewspaperRepository from '@modules/newspaper/repositories/INewspaperRepository';
import ICreateNewspaperDTO from '@modules/newspaper/dtos/ICreateNewspaperDTO';
import Newspaper from '../entities/Newspaper';

class NewspaperRepository implements INewspaperRepository {
  private ormRepository: Repository<Newspaper>;

  constructor() {
    this.ormRepository = getRepository(Newspaper);
  }

  public async create({
    title,
    description,
  }: ICreateNewspaperDTO): Promise<Newspaper> {
    const newspaper = this.ormRepository.create({
      title,
      description,
    });

    await this.ormRepository.save(newspaper);

    return newspaper;
  }

  public async listAllNewsPapper(): Promise<Newspaper[]> {
    const listAllNewspaper = await this.ormRepository.find();

    return listAllNewspaper;
  }

  public async findById(id: string): Promise<Newspaper | undefined> {
    const newspaperId = this.ormRepository.findOne({ where: { id } });

    return newspaperId;
  }
}

export default NewspaperRepository;
