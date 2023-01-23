import { ErrorFactory } from '../common/errors';

export enum PersonErr {
  POST_FAILED = 'post-person-failed',
}

export const errors = {
  'fetch-failed': 'Failed to fetch person API',
  'not-found': 'Person not found',
  [PersonErr.POST_FAILED]: 'Post person failed',
};

export const errorFactory = new ErrorFactory<PersonErr>(
  'person',
  'Person',
  errors,
);
