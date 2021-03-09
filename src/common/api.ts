import axios, { AxiosResponse, AxiosError } from 'axios';
import { getGlobalObject } from './store';
import { ErrorFactory, CommonErr, getErrorCodeByHttpStatus } from './errors';

class Fetcher {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private readonly errorFactory: ErrorFactory<any>) {}

  public async get<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any },
  ): Promise<ApiResponse<T>> {
    return axios
      .get<T>(url, { params })
      .catch((err: AxiosError) => {
        if (err.response && err.response.status) {
          throw this.errorFactory.create(
            getErrorCodeByHttpStatus(err.response.status),
            { message: err.response?.data?.message },
          );
        }

        throw err;
      });
  }

  public async post<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { [key: string]: any },
  ): Promise<ApiResponse<T>> {
    return axios.post<T>(url, data).catch((err: AxiosError) => {
      if (err.response && err.response.status) {
        throw this.errorFactory.create(
          getErrorCodeByHttpStatus(err.response.status),
          { message: err.response?.data?.message },
        );
      }

      throw err;
    });
  }
}

export { Fetcher };

const errorFactory = new ErrorFactory('api', 'API');

/**
 * Axios configuration
 */
export const initializeApi = (apiUrl?: string): void => {
  axios.defaults.baseURL = apiUrl || 'https://api.sherl.io';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.get['Content-Type'] = 'application/json';
  axios.defaults.headers.put['Content-Type'] = 'application/json';
  axios.defaults.headers.get.Authorization = 'Bearer';
  axios.defaults.headers.put.Authorization = 'Bearer';

  axios.interceptors.request.use(
    config => {
      const globalObject = getGlobalObject();

      if (
        typeof globalObject.SHERL_API_KEY === 'undefined' ||
        typeof globalObject.SHERL_API_SECRET === 'undefined'
      ) {
        throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
      }

      config.headers.common['X-WZ-API-KEY'] = globalObject.SHERL_API_KEY;
      config.headers.common['X-WZ-API-SECRET'] = globalObject.SHERL_API_SECRET;
      return config;
    },
    error => Promise.reject(error),
  );
};

export const registerBearerToken = (token: string): void => {
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    error => Promise.reject(error),
  );
};

export type ApiResponse<T> = AxiosResponse<T>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponseError<T = any> = AxiosError<T>;

export interface Pagination<Data> {
  results: Data;
  view: View;
}

export interface View {
  total: number;
  page: number;
  itemsPerPage: number;
}
