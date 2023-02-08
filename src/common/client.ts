import { initializeApi, registerBearerToken } from './api';
import { ErrorFactory, CommonErr } from './errors';
import { AxiosInstance } from 'axios';

export interface InitOptions {
  apiKey: string;
  apiSecret: string;
  apiUrl?: string;
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
