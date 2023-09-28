import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

export const postDiscount = async (
  fetcher: Fetcher,
  parameter: IDiscountParameter,
): Promise<IDiscount> => {
  const response = await fetcher
    .post<IDiscount>(endpoints.POST_DISCOUNT, {
      ...parameter,
    })
    .catch((_err) => {
      throw errorFactory.create(DiscountErr.POST_FAILED);
    });

  if (!response.data) {
    throw errorFactory.create(DiscountErr.POST_FAILED);
  }

  return response.data;
};
