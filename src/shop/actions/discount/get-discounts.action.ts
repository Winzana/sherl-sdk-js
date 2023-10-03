import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscount, IDiscountFilter } from '../../types';
import { Pagination } from '../../../common/types/response';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';

export const getDiscounts = async (
  fetcher: Fetcher,
  filters?: IDiscountFilter,
): Promise<Pagination<IDiscount>> => {
  const response = await fetcher.get<Pagination<IDiscount>>(
    endpoints.DISCOUNTS,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(DiscountErr.FETCH_FAILED);
  }

  return response.data;
};
