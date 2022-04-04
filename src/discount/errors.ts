import { ErrorFactory } from '../common/errors';

type Err = 'fetch-failed' | 'not-found' | 'post-failed';

export enum DiscountErr {
  POST_FAILED = 'post-discount-failed',
  POST_VAL_DISCOUNT_FAILED = 'post-validate-discount-failed',
  PUT_FAILED = 'put-discount-failed',
}

export const errors = {
  'fetch-failed': 'Failed to fetch discount API',
  'not-found': 'Discount not found',
  [DiscountErr.POST_FAILED]: 'Post discount failed',
  [DiscountErr.POST_VAL_DISCOUNT_FAILED]: 'Post validate discount failed',
  [DiscountErr.PUT_FAILED]: 'Put discount failed',
};

export const errorFactory = new ErrorFactory<DiscountErr>(
  'discount',
  'Discount',
  errors,
);
