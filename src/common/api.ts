import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { CommonErr, ErrorFactory, getErrorCodeByHttpStatus } from './errors';
import { ApiResponse, ApiResponseError } from './types/response';

class Fetcher {
  constructor(
    private readonly apiInstance: AxiosInstance,
    private readonly errorFactory: ErrorFactory<string>,
  ) {}

  public async get<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any },
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.apiInstance
      .get<T>(url, { ...config, params })
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
    params?: { [key: string]: any },
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    if (params) {
      const queryParamsString = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
      url += `?${queryParamsString}`;
    }
    return this.apiInstance
      .post<T>(url, data, config)
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

  public async put<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { [key: string]: any },
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.apiInstance
      .put<T>(url, data, config)
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

  public async patch<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { [key: string]: any },
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.apiInstance
      .patch<T>(url, data, config)
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

  public async delete<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any },
  ): Promise<ApiResponse<T>> {
    return this.apiInstance
      .delete<T>(url, { params })
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

const errorFactory = new ErrorFactory('API');

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
  referer?: string,
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
  if (referer) {
    // Only effective on server environment. This setting will be overriden by client browser.
    axiosInstance.defaults.headers.common['Referer'] = referer;
  }

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
