import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export enum ConfigErr {
  FETCH_ERROR = 'fetch-failed',
  NOT_FOUND = 'not-found',
}
export const errors = {
  [ConfigErr.FETCH_ERROR]: 'Failed to fetch config API',
  [ConfigErr.NOT_FOUND]: 'Config not found',
};

export const errorFactory = new ErrorFactory<Err>('Config', errors);
