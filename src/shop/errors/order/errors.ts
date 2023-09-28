import { ErrorFactory } from '../../../common/errors';

export enum OrderErr {
  FETCH_FAILED = 'order/fetch-failed',
  NOT_FOUND = 'order/not-found',
}

export const errors = {
  [OrderErr.FETCH_FAILED]: 'Failed to fetch order API',
  [OrderErr.NOT_FOUND]: 'Order not found',
};

export const errorFactory = new ErrorFactory<OrderErr>('Order', errors);
