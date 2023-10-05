import { ErrorFactory } from '../common/errors';

export enum EtlErr {
  SAVE_CONFIG_FAILED = 'etl/save-config-failed',
  EXTRACT_TRANSFORM_LOAD_FAILED = 'etl/extract-transform-load-failed',
}

export const errors = {
  [EtlErr.SAVE_CONFIG_FAILED]: 'Failed to save etl config',
  [EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED]:
    'Failed to extract load and transform data',
};

export const errorFactory = new ErrorFactory<EtlErr>('ETL', errors);
