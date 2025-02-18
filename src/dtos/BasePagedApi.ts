export interface BasePagedApi<T> {
  limit: number;
  paged: number;
  data: Array<T>;
}
