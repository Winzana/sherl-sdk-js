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

export interface ISearchResult<T> extends Pagination<T> {
  aggregations?: {
    [key: string]: {
      count: number;
      id: string;
      key: string;
      sub?: {
        [key: string]: {
          count: number;
          id: string;
          key: string;
        };
      };
    };
  };
}
