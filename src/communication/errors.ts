import { ErrorFactory } from '../common/errors';

export enum CommunicationErr {
  FETCH_FAILED = 'communication/fetch-failed',
  NOT_FOUND = 'communication/not-found',
  FETCH_FORBIDDEN = 'communication/forbidden',
}

export const errors = {
  [CommunicationErr.FETCH_FAILED]: 'Failed to fetch communication API',
  [CommunicationErr.NOT_FOUND]: 'Communication not found',
  [CommunicationErr.FETCH_FORBIDDEN]:
    'Failed to fetch communication API. Forbidden access',
};

export const errorFactory = new ErrorFactory<CommunicationErr>(
  'Communication',
  errors,
);
