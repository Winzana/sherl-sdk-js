import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderFindByDto, IOrderResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { StringUtils } from '../../../common/utils/string';
import { getSherlError } from '../../../common/utils';

/**
 * Retrieves a paginated list of orders associated with a specific organization, based on provided filter criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose orders are being retrieved.
 * @param {IOrderFindByDto} [filters] - Optional filters to apply when fetching orders for the organization.
 * @returns {Promise<Pagination<IOrderResponse>>} A promise that resolves to a paginated response containing the list of orders for the specified organization.
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrderErr.GET_ORGANIZATION_ORDERS_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrderErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(OrderErr.GET_ORGANIZATION_ORDERS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrderErr.GET_ORGANIZATION_ORDERS_FAILED),
    );
  }
};
