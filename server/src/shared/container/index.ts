import { container } from 'tsyringe';

import INewspaperRepository from '@modules/newspaper/repositories/INewspaperRepository';
import NewspaperRepository from '@modules/newspaper/infra/typeorm/repositories/NewspaperRepository';

container.registerSingleton<INewspaperRepository>(
  'NewspaperRepository',
  NewspaperRepository,
);
