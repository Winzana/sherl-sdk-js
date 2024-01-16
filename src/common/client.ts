import { initializeApi, registerBearerToken } from './api';
import { ErrorFactory, CommonErr } from './errors';
import { AxiosInstance } from 'axios';

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

  /**
   * Resets the SherlClient instance with new options.
   * @param {InitOptions} options - New initialization options to reset the client instance.
   */
  public resetInstance(options: InitOptions) {
    this.revokeAuthToken();
    this.apiInstance = initializeApi(
      options.apiKey,
      options.apiSecret,
      options.apiUrl,
      options.referer,
    );
  }

  /**
   * Registers a new authentication token for the API instance.
   * @param {string} token - The authentication token to be registered.
   */
  public registerAuthToken(token: string) {
    this.revokeAuthToken();
    this.mwKey = registerBearerToken(this.apiInstance, token);
  }

  /**
   * Revokes the current authentication token from the API instance.
   */
  public revokeAuthToken() {
    if (this.mwKey) {
      this.apiInstance.interceptors.request.eject(this.mwKey);
      this.mwKey = null;
    }
  }

  /**
   * Retrieves the current Axios API instance.
   * @returns {AxiosInstance} The current Axios API instance.
   */
  public getApiInstance() {
    return this.apiInstance;
  }

  /**
   * Retrieves the current initialization options.
   * @returns {InitOptions} The current initialization options.
   */
  public getOptions() {
    return this.options;
  }
}

/**
 * Initializes and returns a new instance of SherlClient with the provided options.
 *
 * Validates the provided options and creates a new instance of SherlClient. Throws errors
 * if required options are missing or if the provided API URL is invalid.
 *
 * @param {InitOptions} options - The initialization options for the SherlClient.
 * @returns {SherlClient} A new instance of SherlClient.
 * @throws {Error} Throws an error if required options are missing or the API URL is invalid.
 */
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
