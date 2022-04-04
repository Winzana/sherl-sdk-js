import { DiscountApi } from '../api/client';
import { DiscountErr, errorFactory } from '../errors';
import {
  IDiscountParameter,
  IDiscountResponse,
  IValidateDiscountCode,
} from '../types';

export const validateDiscount = async (
  parameter: IValidateDiscountCode,
): Promise<IValidateDiscountCode> => {
  const response = await DiscountApi.postValidateDiscount(parameter);

  if (!response.data) {
    throw errorFactory.create(DiscountErr.POST_VAL_DISCOUNT_FAILED);
  }

  return response.data;
};
