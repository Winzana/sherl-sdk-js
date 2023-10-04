import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscount, IDiscountFilter } from '../../types';
import { Pagination } from '../../../common/types/response';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';

export const getDiscountByParams = async (
  fetcher: Fetcher,
  params: IDiscountFilter,
): Promise<Pagination<IDiscount>> => {
  try {
    const response = await fetcher.get<Pagination<IDiscount>>(
      endpoints.GET_DISCOUNT_BY,
      { params },
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.FETCH_FAILED);
  }
};
