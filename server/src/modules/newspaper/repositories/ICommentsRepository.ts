import ICreateCommentsDTO from '../dtos/ICreateCommentsDTO';

import Comment from '../infra/typeorm/entities/Comments';

export default interface ICommentsRepository {
  createComment(data: ICreateCommentsDTO): Promise<Comment>;
  listAllComments(): Promise<Comment[]>;
}
