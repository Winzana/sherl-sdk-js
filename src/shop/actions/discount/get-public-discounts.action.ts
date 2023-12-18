import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscount, IDiscountPublicFilter } from '../../types';
import { Pagination } from '../../../common/types/response';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { getSherlError } from '../../../common/utils/errors';

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
  try {
    const response = await fetcher.get<Pagination<IDiscount>>(
      endpoints.GET_PUBLIC_DISCOUNTS,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          DiscountErr.GET_PUBLIC_DISCOUNTS_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(DiscountErr.GET_PUBLIC_DISCOUNTS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.GET_PUBLIC_DISCOUNTS_FAILED),
    );
  }
};
