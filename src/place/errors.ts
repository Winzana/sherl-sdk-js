import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found';

export const errors = {
  'fetch-failed': 'Failed to fetch products API',
  'not-found': 'Place not found',
};

export const errorFactory = new ErrorFactory<Err>('Place', errors);
