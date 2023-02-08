import { ErrorFactory } from '../common/errors';

export enum ConfigErr {
  FETCH_ERROR = 'config/fetch-failed',
  NOT_FOUND = 'config/not-found',
}
export const errors = {
  [ConfigErr.FETCH_ERROR]: 'Failed to fetch config API',
  [ConfigErr.NOT_FOUND]: 'Config not found',
};

export const errorFactory = new ErrorFactory<ConfigErr>('Config', errors);
