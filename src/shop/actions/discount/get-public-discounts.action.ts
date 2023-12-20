import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscount, IDiscountPublicFilter } from '../../types';
import { Pagination } from '../../../common/types/response';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';

/**
 * Retrieves a paginated list of public discounts based on provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IDiscountPublicFilter} [filters] - Optional filters to apply when fetching public discounts.
 * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of public discounts based on the provided filters.
 */
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
