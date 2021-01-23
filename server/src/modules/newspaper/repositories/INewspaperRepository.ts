import ICreateNewspaperDTO from '../dtos/ICreateNewspaperDTO';

import Newspaper from '../infra/typeorm/entities/Newspaper';

export default interface INewspaperRepository {
  create(data: ICreateNewspaperDTO): Promise<Newspaper>;
  listAllNewsPapper(): Promise<Newspaper[]>;
}
