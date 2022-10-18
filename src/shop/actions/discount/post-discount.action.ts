import { DiscountApi } from '../../api/discount/client';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import {
  IDiscountParameter,
  IDiscountResponse,
} from '../../types/discount/types';

export const postDiscount = async (
  parameter: IDiscountParameter,
): Promise<IDiscountResponse> => {
  const response = await DiscountApi.postDiscount(parameter);

  if (!response.data) {
    throw errorFactory.create(DiscountErr.POST_FAILED);
  }

  return response.data;
};
