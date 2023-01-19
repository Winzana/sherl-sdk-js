import { ErrorFactory } from '../common/errors';

export enum ConfigErr {
  SET_CONFIG_VALUE_FAILED = 'set-config-value-failed',
  GET_CONFIG_VALUE_FAILED = 'get-config-value-failed',
}
export const errors = {
  [ConfigErr.SET_CONFIG_VALUE_FAILED]: 'Could not set config value',
  [ConfigErr.GET_CONFIG_VALUE_FAILED]: 'Could not get config value',
};

export const errorFactory = new ErrorFactory<ConfigErr>(
  'config',
  'Config',
  errors,
);
