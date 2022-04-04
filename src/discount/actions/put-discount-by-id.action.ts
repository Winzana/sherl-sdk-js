import { DiscountApi } from '../api/client';
import { DiscountErr, errorFactory } from '../errors';
import { IDiscountParameter, IDiscountResponse } from '../types';

export const updateDiscountById = async (
  parameter: IDiscountParameter,
  id: string,
): Promise<IDiscountResponse> => {
  const response = await DiscountApi.putDiscount(parameter, id);

  if (!response.data) {
    throw errorFactory.create(DiscountErr.PUT_FAILED);
  }

  return response.data;
};
