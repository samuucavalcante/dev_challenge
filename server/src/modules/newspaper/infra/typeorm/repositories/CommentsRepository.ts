import ICommentsRepository from '@modules/newspaper/repositories/ICommentsRepository';
import ICreateCommentsDTO from '@modules/newspaper/dtos/ICreateCommentsDTO';

import { Repository, getRepository } from 'typeorm';

import Comments from '../entities/Comments';

class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comments>;

  constructor() {
    this.ormRepository = getRepository(Comments);
  }

  public async createComment({
    id,
    description,
  }: ICreateCommentsDTO): Promise<Comments> {
    const response = this.ormRepository.create({
      id,
      description,
    });

    await this.ormRepository.save(response);

    return response;
  }

  public async listAllComments(): Promise<Comments[]> {
    const response = await this.ormRepository.find();

    return response;
  }
}

export default CommentsRepository;
