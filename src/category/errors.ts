import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export const errors = {
  'fetch-failed': 'Failed to fetch contact API',
  'not-found': 'contact not found',
};

export const errorFactory = new ErrorFactory<Err>(
  'category',
  'Category',
  errors,
);
