import { ErrorFactory } from '../../../common/errors';

type Err = 'fetch-failed' | 'not-found';

export const errors = {
  'fetch-failed': 'Failed to fetch order API',
  'not-found': 'Order not found',
};

export const errorFactory = new ErrorFactory<Err>('order', 'Order', errors);
