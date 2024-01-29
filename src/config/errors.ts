import { ErrorFactory } from '../common/errors';

export enum ConfigErr {
  GET_PUBLIC_CONFIG_FAILED = 'config/fetch-failed',
  GET_PUBLIC_CONFIG_FORBIDDEN = 'config/fetch-forbidden',
  SET_CONFIG_FAILED = 'config/set-failed',
  SET_CONFIG_FORBIDDEN = 'config/set-forbidden',
  CONFIG_NOT_FOUND = 'config/not-found',
}
export const errors = {
  [ConfigErr.GET_PUBLIC_CONFIG_FAILED]: 'Failed to fetch config API',
  [ConfigErr.GET_PUBLIC_CONFIG_FORBIDDEN]:
    'Failed to fetch config API, forbidden',
  [ConfigErr.SET_CONFIG_FAILED]: 'Failed to set config',
  [ConfigErr.SET_CONFIG_FORBIDDEN]: 'Failed to set config, forbidden',
  [ConfigErr.CONFIG_NOT_FOUND]: 'Config not found',
};

export const errorFactory = new ErrorFactory<ConfigErr>('Config', errors);
