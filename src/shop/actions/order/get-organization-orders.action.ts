import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderFindByDto, IOrderResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { StringUtils } from '../../../common/utils/string';

/**
 * Retrieves a paginated list of orders associated with a specific organization, based on provided filter criteria.
 *
 * This function sends a GET request to fetch orders for an organization, identified by its unique ID, allowing for
 * filtering based on various criteria specified in the IOrderFindByDto object. It returns a paginated response containing
 * a list of orders, each encapsulated in an IOrderResponse object. If the request fails, an error with a specific code
 * indicating the failure in fetching the orders is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose orders are being retrieved.
 * @param {IOrderFindByDto} [filters] - Optional filters to apply when fetching orders for the organization.
 * @returns {Promise<Pagination<IOrderResponse>>} A promise that resolves to a paginated response containing the list of orders for the specified organization.
 * @throws {OrderErr.FETCH_FAILED} Throws an error if the fetching of orders for the organization fails.
 */
export const getOrganizationOrders = async (
  fetcher: Fetcher,
  organizationId: string,
  filters?: IOrderFindByDto,
): Promise<Pagination<IOrderResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IOrderResponse>>(
      StringUtils.bindContext(endpoints.GET_ORGANIZATION_ORDERS, {
        id: organizationId,
      }),
      filters,
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.FETCH_FAILED);
  }
};
