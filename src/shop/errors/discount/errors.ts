import { ErrorFactory } from '../../../common/errors';

export enum DiscountErr {
  POST_FAILED = 'discount/post-discount-failed',
  FETCH_FAILED = 'discount/order/fetch-failed',
  NOT_FOUND = 'discount/order/not-found',
  UPDATE_FAILED = 'discount/update-discount-failed',
  DELETE_FAILED = 'discount/delete-failed',
  VALIDATE_CODE_FAILED = 'discount/validation-code-failed',
}

export const errors = {
  [DiscountErr.FETCH_FAILED]: 'Failed to fetch discount API',
  [DiscountErr.NOT_FOUND]: 'Discount not found',
  [DiscountErr.POST_FAILED]: 'Post discount failed',
  [DiscountErr.UPDATE_FAILED]: 'Update discount failed',
  [DiscountErr.DELETE_FAILED]: 'Delete discount failed',
  [DiscountErr.VALIDATE_CODE_FAILED]: 'Validate discount code failed',
};

export const errorFactory = new ErrorFactory<DiscountErr>('Discount', errors);
