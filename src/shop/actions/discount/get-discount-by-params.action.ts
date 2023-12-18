import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscount, IDiscountFilter } from '../../types';
import { Pagination } from '../../../common/types/response';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';

/**
 * Retrieves a paginated list of discounts based on provided filter parameters.
 *
 * This function sends a GET request to fetch discounts, allowing for filtering based on various criteria specified
 * in the IDiscountFilter object. It returns a paginated response containing a list of discounts, each encapsulated
 * in an IDiscount object. If the request fails, an error with a specific code indicating the failure in fetching the
 * discounts is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IDiscountFilter} params - The filter parameters used to query the discounts.
 * @returns {Promise<Pagination<IDiscount>>} A promise that resolves to a paginated response containing the list of discounts based on the provided filters.
 * @throws {DiscountErr.FETCH_FAILED} Throws an error if the fetching of discounts fails.
 */
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
