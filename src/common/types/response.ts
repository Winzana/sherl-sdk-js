import { AxiosError, AxiosResponse } from 'axios';

export type ApiResponse<T> = AxiosResponse<T>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponseError<T = any> = AxiosError<T>;

export interface Pagination<Data> {
  results: Data[];
  view: View;
}

export interface View {
  total: number;
  page: number;
  itemsPerPage: number;
}
