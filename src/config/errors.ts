import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export enum ConfigErr {
  FETCH_ERROR = 'fetch-failed',
  NOT_FOUND = 'not-found',
}
export const errors = {
  [ConfigErr.FETCH_ERROR]: 'Failed to fetch products API',
  [ConfigErr.NOT_FOUND]: 'Place not found',
};

export const errorFactory = new ErrorFactory<Err>('config', 'Config', errors);
