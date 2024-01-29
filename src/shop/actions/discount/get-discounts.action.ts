import { SherlError } from '../../../common';
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(DiscountErr.GET_DISCOUNTS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(DiscountErr.GET_DISCOUNTS_FAILED),
        );
    }
  }
};
