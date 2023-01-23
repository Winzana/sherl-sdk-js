import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { CommonErr, ErrorFactory, getErrorCodeByHttpStatus } from './errors';

class Fetcher {
  constructor(
    private readonly apiInstance: AxiosInstance,
    private readonly errorFactory: ErrorFactory<string>,
  ) {}

  public async get<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any },
  ): Promise<ApiResponse<T>> {
    return this.apiInstance
      .get<T>(url, { params })
      .catch((err: AxiosError<ApiResponseError>) => {
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
    return this.apiInstance
      .post<T>(url, data)
      .catch((err: AxiosError<ApiResponseError>) => {
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
interface CustomAxiosRequestConfig extends Omit<AxiosRequestConfig, 'headers'> {
  headers?: any; // this was "any" at v0.21.1 but now broken between 0.21.4 >= 0.27.2
  // Lets make it any again to make it work again.
}
export const initializeApi = (
  apiKey: string,
  apiSecret: string,
  apiUrl?: string,
) => {
  const axiosInstance = axios.create({
    baseURL: apiUrl || 'https://api.sherl.io',
  });
  axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.get['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.get.Authorization = 'Bearer';
  axiosInstance.defaults.headers.put.Authorization = 'Bearer';

  axiosInstance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      if (typeof apiKey === 'undefined' || typeof apiSecret === 'undefined') {
        throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
      }

      config.headers.common['X-WZ-API-KEY'] = apiKey;
      config.headers.common['X-WZ-API-SECRET'] = apiSecret;
      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

export const registerBearerToken = (instance: AxiosInstance, token: string) => {
  return instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error),
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
