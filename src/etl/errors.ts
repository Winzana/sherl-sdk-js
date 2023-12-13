import { ErrorFactory } from '../common/errors';

export enum EtlErr {
  ETL_NOT_FOUND = 'etl/not_found',
  EXTRACT_TRANSFORM_FORBIDDEN = 'etl/transform_forbidden',
  SAVE_CONFIG_FAILED = 'etl/save-config-failed',
  EXTRACT_TRANSFORM_LOAD_FAILED = 'etl/extract-transform-load-failed',
  SAVE_CONFIG_FORBIDDEN = 'etl/save-config-forbidden',
}

export const errors = {
  [EtlErr.SAVE_CONFIG_FAILED]: 'Failed to save etl config',
  [EtlErr.ETL_NOT_FOUND]: 'Failed etl not found',
  [EtlErr.EXTRACT_TRANSFORM_FORBIDDEN]:
    'Failed to extract load and transform data forbidden',
  [EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED]:
    'Failed to extract load and transform data',
  [EtlErr.SAVE_CONFIG_FAILED]: 'Failed to save etl config forbidden',
};

export const errorFactory = new ErrorFactory<EtlErr>('ETL', errors);
