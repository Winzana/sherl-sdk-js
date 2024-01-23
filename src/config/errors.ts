import { ErrorFactory } from '../common/errors';

export enum ConfigErr {
  FETCH_ERROR = 'config/fetch-failed',
  FETCH_FORBIDDEN = 'config/fetch-forbidden',
  SET_CONFIG_ERROR = 'config/set-failed',
  SET_CONFIG_FORBIDDEN = 'config/set-forbidden',
  NOT_FOUND = 'config/not-found',
}
export const errors = {
  [ConfigErr.FETCH_ERROR]: 'Failed to fetch config API',
  [ConfigErr.FETCH_FORBIDDEN]: 'Failed to fetch config API, forbidden',
  [ConfigErr.SET_CONFIG_ERROR]: 'Failed to set config',
  [ConfigErr.SET_CONFIG_FORBIDDEN]: 'Failed to set config, forbidden',
  [ConfigErr.NOT_FOUND]: 'Config not found',
};

export const errorFactory = new ErrorFactory<ConfigErr>('Config', errors);
