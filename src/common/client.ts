import { initializeApi, registerBearerToken } from './api';
import { ErrorFactory, CommonErr } from './errors';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface InitOptions {
  apiKey: string;
  apiSecret: string;
  apiUrl?: string;
  referer?: string;
}

const errorFactory = new ErrorFactory('Client');

export class SherlClient {
  private apiInstance: AxiosInstance;
  private mwKey: number | null = null;

  constructor(private readonly options: InitOptions) {
    this.apiInstance = initializeApi(
      options.apiKey,
      options.apiSecret,
      options.apiUrl,
      options.referer,
    );
  }

  public registerAuthToken(token: string) {
    this.revokeAuthToken();
    this.mwKey = registerBearerToken(this.apiInstance, token);
  }

  public revokeAuthToken() {
    if (this.mwKey) {
      this.apiInstance.interceptors.request.eject(this.mwKey);
    }
  }

  public getApiInstance() {
    return this.apiInstance;
  }

  public getOptions() {
    return this.options;
  }
}

export function init(options: InitOptions) {
  if (
    typeof options.apiKey === 'undefined' ||
    typeof options.apiSecret === 'undefined'
  ) {
    throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
  }

  if (options.apiUrl && !options.apiUrl.match(/https?:\/\/[\w-.]+\/?$/)) {
    throw errorFactory.create(CommonErr.INVALID_URI);
  }

  return new SherlClient(options);
}

/**
 * Axios configuration
 */
interface CustomAxiosRequestConfig extends Omit<AxiosRequestConfig, 'headers'> {
  headers?: any; // this was "any" at v0.21.1 but now broken between 0.21.4 >= 0.27.2
  // Lets make it any again to make it work again.
}

// RESET ACTUEL AXIOS INSTANCE
export const resetAxiosInstance = (
  axiosInstance: AxiosInstance,
  apiKey: string,
  apiSecret: string,
  apiUrl?: string,
  referer?: string,
): AxiosInstance => {
  axiosInstance.defaults.baseURL = apiUrl || 'https://api.sherl.io';

  axiosInstance.defaults.headers.common = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer',
  };

  axiosInstance.interceptors.request.eject(0);

  axiosInstance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      if (typeof apiKey === 'undefined' || typeof apiSecret === 'undefined') {
        throw errorFactory.create(CommonErr.MISSING_CREDENTIALS);
      }

      config.headers.common['X-WZ-API-KEY'] = apiKey;
      config.headers.common['X-WZ-API-SECRET'] = apiSecret;

      if (referer) {
        config.headers.common['Referer'] = referer;
      }

      if (config.headers.Authorization) {
        config.headers.Authorization = null;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};
