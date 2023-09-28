import { ErrorFactory } from '../common/errors';

export enum CommunicationErr {
  FETCH_FAILED = 'communication/fetch-failed',
  NOT_FOUND = 'communication/not-found',
}

export const errors = {
  [CommunicationErr.FETCH_FAILED]: 'Failed to fetch communication API',
  [CommunicationErr.NOT_FOUND]: 'Communication not found',
};

export const errorFactory = new ErrorFactory<CommunicationErr>(
  'Communication',
  errors,
);
