import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import {
  IDiscountParameter,
  IDiscountResponse,
} from '../../types/discount/types';

export const postDiscount = async (
  fetcher: Fetcher,
  parameter: IDiscountParameter,
): Promise<IDiscountResponse> => {
  const response = await fetcher
    .post<IDiscountResponse>(endpoints.POST_DISCOUNT, {
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
