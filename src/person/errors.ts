import { ErrorFactory } from '../common/errors';

export enum PersonErr {
  PUT_FAILED = 'put-person-failed',
  POST_FAILED = 'post-person-failed',
}

export const errors = {
  'fetch-failed': 'Failed to fetch person API',
  'not-found': 'Person not found',
  [PersonErr.PUT_FAILED]: 'Failed to update person',
  [PersonErr.POST_FAILED]: 'Failed to create person',
};

export const errorFactory = new ErrorFactory<PersonErr>(
  'person',
  'Person',
  errors,
);
