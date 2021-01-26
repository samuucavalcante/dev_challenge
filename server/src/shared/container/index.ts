import { container } from 'tsyringe';

import INewspaperRepository from '@modules/newspaper/repositories/INewspaperRepository';
import NewspaperRepository from '@modules/newspaper/infra/typeorm/repositories/NewspaperRepository';

import ICommentsRepository from '@modules/newspaper/repositories/ICommentsRepository';
import CommentsRepository from '@modules/newspaper/infra/typeorm/repositories/CommentsRepository';

container.registerSingleton<INewspaperRepository>(
  'NewspaperRepository',
  NewspaperRepository,
);

container.registerSingleton<ICommentsRepository>(
  'CommentsRepository',
  CommentsRepository,
);
