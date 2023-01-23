import { Fetcher } from './api';
import { SherlClient } from './config';
import { ErrorFactory } from './errors';

export abstract class AbstractProvider {
  protected readonly fetcher: Fetcher;

  constructor(
    protected readonly client: SherlClient,
    errorFactory: ErrorFactory<string>,
  ) {
    this.fetcher = new Fetcher(client.getApiInstance(), errorFactory);
  }

  protected withFetcher =
    <T extends unknown[], R>(method: (fetcher: Fetcher, ...args: T) => R) =>
    (...args: T) =>
      method(this.fetcher, ...args);
}
