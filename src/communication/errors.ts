import { ErrorFactory } from '../common/errors';

export enum CommunicationErr {
  FIND_COMMUNICATION_FAILED = 'communication/find-communication-failed',
  FIND_COMMUNICATION_FORBIDDEN = 'communication/forbidden',
}

export const errors = {
  [CommunicationErr.FIND_COMMUNICATION_FAILED]: 'Failed to find communication',
  [CommunicationErr.FIND_COMMUNICATION_FORBIDDEN]:
    'Failed to fetch communication API. Forbidden access',
};

export const errorFactory = new ErrorFactory<CommunicationErr>(
  'Communication',
  errors,
);
