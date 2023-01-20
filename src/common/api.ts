import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import { getGlobalObject } from './store';
import { ErrorFactory, CommonErr, getErrorCodeByHttpStatus } from './errors';

class Fetcher {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(
    private readonly errorFactory: ErrorFactory<any>,
    private axios: AxiosInstance,
  ) {}

  public async get<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any },
  ): Promise<ApiResponse<T>> {
    return this.axios
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
    return this.axios
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

export const registerBearerToken = (axios: AxiosInstance): void => {
  const globalObject = getGlobalObject();
  axios.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      config.headers.Authorization = `Bearer ${globalObject.INSTANCE_TOKEN}`;
      return config;
    },
    (error) => Promise.reject(error),
  );
};

/**
 * Axios configuration
 */
interface CustomAxiosRequestConfig extends Omit<AxiosRequestConfig, 'headers'> {
  headers?: any; // this was "any" at v0.21.1 but now broken between 0.21.4 >= 0.27.2
  // Lets make it any again to make it work again.
}

/**
 * Axios Sherl API configuration
 */
export const initializeSherlApi = (apiUrl?: string): AxiosInstance => {
  const axiosInstance = axios.create({});
  axiosInstance.defaults.baseURL = apiUrl || 'https://api.sherl.io';
  axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.get['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.get.Authorization = 'Bearer';
  axiosInstance.defaults.headers.put.Authorization = 'Bearer';

  axiosInstance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
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
    (error) => Promise.reject(error),
  );
  return axiosInstance;
};

/**
 * Axios Console API configuration
 */
export const initializeConsoleApi = (apiUrl?: string): AxiosInstance => {
  const axiosInstance = axios.create({});
  axiosInstance.defaults.baseURL = apiUrl || 'https://api.sherl.io';
  axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.get['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';
  axiosInstance.defaults.headers.get.Authorization = 'Bearer';
  axiosInstance.defaults.headers.put.Authorization = 'Bearer';

  axiosInstance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      const globalObject = getGlobalObject();

      if (
        typeof globalObject.CONSOLE_API_KEY === 'undefined' ||
        typeof globalObject.CONSOLE_API_SECRET === 'undefined'
      ) {
        throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
      }

      config.headers.common['X-WZ-API-KEY'] = globalObject.CONSOLE_API_KEY;
      config.headers.common['X-WZ-API-SECRET'] =
        globalObject.CONSOLE_API_SECRET;

      console.log(globalObject.INSTANCE_TOKEN);

      if (typeof globalObject.INSTANCE_TOKEN !== 'undefined') {
        registerBearerToken(axiosInstance);
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
  return axiosInstance;
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
