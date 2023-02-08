import { ErrorFactory } from '../../../common/errors';

export enum ProductErr {
  FETCH_FAILED = 'product/fetch-failed',
  NOT_FOUND = 'product/not-found',
}

export const errors = {
  [ProductErr.FETCH_FAILED]: 'Failed to fetch products API',
  [ProductErr.NOT_FOUND]: 'Product not found',
};

export const errorFactory = new ErrorFactory<ProductErr>('Product', errors);
