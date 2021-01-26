import { inject, injectable } from 'tsyringe';

import ICommentsRepository from '../repositories/ICommentsRepository';

import Commmets from '../infra/typeorm/entities/Comments';

@injectable()
class ShowCommentsService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {}

  public async execute(): Promise<Commmets[]> {
    const response = this.commentsRepository.listAllComments();

    return response;
  }
}

export default ShowCommentsService;
