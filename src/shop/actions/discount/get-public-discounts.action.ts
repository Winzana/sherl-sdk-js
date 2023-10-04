import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscount, IDiscountPublicFilter } from '../../types';
import { Pagination } from '../../../common/types/response';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';

export const getPublicDiscounts = async (
  fetcher: Fetcher,
  filters?: IDiscountPublicFilter,
): Promise<Pagination<IDiscount>> => {
  const response = await fetcher.get<Pagination<IDiscount>>(
    endpoints.GET_PUBLIC_DISCOUNTS,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(DiscountErr.FETCH_FAILED);
  }

  return response.data;
};
