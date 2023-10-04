import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

export const createDiscount = async (
  fetcher: Fetcher,
  parameter: IDiscountParameter,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.post<IDiscount>(endpoints.DISCOUNTS, {
      ...parameter,
    });
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.POST_FAILED);
  }
};
