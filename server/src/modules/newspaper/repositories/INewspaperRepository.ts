import ICreateNewspaperDTO from '../dtos/ICreateNewspaperDTO';

import INewspaper from '../models/INewspaper';

export default interface INewspaperRepository {
  create(data: ICreateNewspaperDTO): Promise<INewspaper>;
  listAllNewsPapper(): Promise<INewspaper[]>;
}
