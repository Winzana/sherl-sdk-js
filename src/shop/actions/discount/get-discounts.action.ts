import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscount, IDiscountFilter } from '../../types';
import { Pagination } from '../../../common/types/response';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { getSherlError } from '../../../common/utils';

/**
 * Retrieves a paginated list of discounts based on provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IDiscountFilter} filters - Optional filters to apply when fetching discounts.
 * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of discounts based on the provided filters.
 */
export const getDiscounts = async (
  fetcher: Fetcher,
  filters?: IDiscountFilter,
): Promise<Pagination<IDiscount>> => {
  try {
    const response = await fetcher.get<Pagination<IDiscount>>(
      endpoints.DISCOUNTS,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(DiscountErr.GET_DISCOUNT_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(DiscountErr.DISCOUNT_NOT_FOUND);
      default:
        throw errorFactory.create(DiscountErr.GET_DISCOUNT_BY_ID_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.GET_DISCOUNT_BY_ID_FAILED),
    );
  }
};
