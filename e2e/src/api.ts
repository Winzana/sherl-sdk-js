import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const initAxiosInstance = () => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3001/api",
    withCredentials: true,
  });
  apiClient.defaults.headers.common['Content-Type'] = 'application/json';

  return apiClient;
};

class Fetcher {
  constructor(private readonly apiInstance: AxiosInstance) {}

  public setBearerToken = (token: string) => {
    this.apiInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  };

  public async get<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.apiInstance
      .get<T>(url, config)
      .then((res: AxiosResponse) => res.data);
  }

  public async post<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: { [key: string]: any },
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.apiInstance
      .post<T>(url, data, config)
      .then((res: AxiosResponse) => res.data);
  }

  public async put<T>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: { [key: string]: any },
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.apiInstance
      .put<T>(url, data, config)
      .then((res: AxiosResponse) => res.data);
  }
}

const fetcher = new Fetcher(initAxiosInstance());

export { fetcher };
