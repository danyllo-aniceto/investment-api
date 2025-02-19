export interface BaseApi<T> {
  status: boolean;
  message: string;
  data: T;
}
