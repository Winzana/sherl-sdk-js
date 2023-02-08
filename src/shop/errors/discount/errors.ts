import { ErrorFactory } from '../../../common/errors';

export enum DiscountErr {
  POST_FAILED = 'discount/post-discount-failed',
  FETCH_FAILED = 'discount/order/fetch-failed',
  NOT_FOUND = 'discount/order/not-found',
}

export const errors = {
  [DiscountErr.FETCH_FAILED]: 'Failed to fetch discount API',
  [DiscountErr.NOT_FOUND]: 'Discount not found',
  [DiscountErr.POST_FAILED]: 'Post discount failed',
};

export const errorFactory = new ErrorFactory<DiscountErr>('Discount', errors);
