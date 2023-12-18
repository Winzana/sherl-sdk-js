import { ErrorFactory } from '../../../common/errors';

export enum DiscountErr {
  CREATE_DISCOUNT_FAILED = 'discount/create-discount-failed',
  CREATE_DISCOUNT_FAILED_FORBIDDEN = 'discount/create-discount-failed-forbidden',
  DELETE_DISCOUNT_FAILED = 'discount/delete-discount-failed',
  DELETE_DISCOUNT_FAILED_FORBIDDEN = 'discount/delete-discount-failed-forbidden',
  GET_DISCOUNTS_BY_PARAMS_FAILED = 'discount/get-discount-by-params-failed',
  GET_DISCOUNTS_BY_PARAMS_FAILED_FORBIDDEN = 'discount/get-discount-by-params-failed-forbidden',
  GET_DISCOUNT_BY_ID_FAILED = 'discount/get-discount-by-id-failed',
  GET_DISCOUNT_BY_ID_FAILED_FORBIDDEN = 'discount/get-discount-by-id-failed-forbidden',
  GET_DISCOUNTS_FAILED = 'discount/get-dicounts-failed',
  GET_DISCOUNTS_FAILED_FORBIDDEN = 'discount/get-dicounts-failed-forbidden',
  GET_PUBLIC_DISCOUNTS_FAILED = 'discount/get-public-discount-failed',
  GET_PUBLIC_DISCOUNTS_FAILED_FORBIDDEN = 'discount/get-public-discount-failed-forbidden',
  UPDATE_DISCOUNT_FAILED = 'discount/update-discount-failed',
  UPDATE_DISCOUNT_FAILED_FORBIDDEN = 'discount/update-discount-failed-forbidden',
  VALIDATE_DISCOUNT_CODE_FAILED = 'discount/validate-discount-code-failed',
  VALIDATE_DISCOUNT_CODE_FAILED_FORBIDDEN = 'discount/validate-discount-code-failed-forbidden',
  DISCOUNT_NOT_FOUND = 'discount/not-found',
  DISCOUNT_CODE_NOT_FOUND = 'discount/code-not-found',
}

export const errors = {
  [DiscountErr.CREATE_DISCOUNT_FAILED]: 'Create discount failed',
  [DiscountErr.CREATE_DISCOUNT_FAILED_FORBIDDEN]:
    'Create discount failed, forbidden',
  [DiscountErr.DELETE_DISCOUNT_FAILED]: 'Delete discount failed',
  [DiscountErr.DELETE_DISCOUNT_FAILED_FORBIDDEN]:
    'Delete discount failed, forbidden',
  [DiscountErr.GET_DISCOUNTS_BY_PARAMS_FAILED]:
    'Get discounts by params failed',
  [DiscountErr.GET_DISCOUNTS_BY_PARAMS_FAILED_FORBIDDEN]:
    'Get discounts by params failed, forbidden',
  [DiscountErr.GET_DISCOUNT_BY_ID_FAILED]: 'Get discount by id failed',
  [DiscountErr.GET_DISCOUNT_BY_ID_FAILED_FORBIDDEN]:
    'Get discount by id failed, forbidden',
  [DiscountErr.GET_DISCOUNTS_FAILED]: 'Get discounts failed',
  [DiscountErr.GET_DISCOUNTS_FAILED_FORBIDDEN]:
    'Get discounts failed, forbidden',
  [DiscountErr.GET_PUBLIC_DISCOUNTS_FAILED]: 'Get public discount failed',
  [DiscountErr.GET_PUBLIC_DISCOUNTS_FAILED_FORBIDDEN]:
    'Get public discount failed, forbidden',
  [DiscountErr.UPDATE_DISCOUNT_FAILED]: 'Update discount failed',
  [DiscountErr.UPDATE_DISCOUNT_FAILED_FORBIDDEN]:
    'Update discount failed, forbidden',
  [DiscountErr.VALIDATE_DISCOUNT_CODE_FAILED]: 'Validate discount code failed',
  [DiscountErr.VALIDATE_DISCOUNT_CODE_FAILED_FORBIDDEN]:
    'Validate discount code failed, forbidden',
  [DiscountErr.DISCOUNT_NOT_FOUND]: 'Discount not found',
  [DiscountErr.DISCOUNT_CODE_NOT_FOUND]: 'Discount code not found',
};

export const errorFactory = new ErrorFactory<DiscountErr>('Discount', errors);
