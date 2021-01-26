import { inject, injectable } from 'tsyringe';

import ICreateComments from '../repositories/ICommentsRepository';

import Comments from '../infra/typeorm/entities/Comments';

interface IRequest {
  id: string;
  description: string;
}

@injectable()
class CreateCommentsService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICreateComments,
  ) {}

  public async execute({ id, description }: IRequest): Promise<Comments> {
    const response = await this.commentsRepository.createComment({
      id,
      description,
    });

    return response;
  }
}

export default CreateCommentsService;
