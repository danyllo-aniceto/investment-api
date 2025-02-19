import { BaseApi } from './BaseApi';

export interface IService<DTO, T> {
  handle(data: DTO): Promise<BaseApi<T>>;
}
