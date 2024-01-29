import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse, OrderStatusEnum } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Updates the status of a specific order.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the order whose status is being updated.
 * @param {OrderStatusEnum} status - The new status to be set for the order.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order.
 */
export const updateOrderStatus = async (
  fetcher: Fetcher,
  id: string,
  status: OrderStatusEnum,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.put<IOrderResponse>(
      StringUtils.bindContext(endpoints.UPDATE_ORDER_STATUS, { id, status }),
      {},
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 400:
        throw errorFactory.create(OrderErr.BAD_REQUEST);
      case 401:
        throw errorFactory.create(OrderErr.NOT_ALLOWED);
      case 403:
        throw errorFactory.create(OrderErr.UPDATE_ORDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrderErr.ORDER_NOT_FOUND);
      case 409:
        throw errorFactory.create(OrderErr.ALREADY_CHANGED);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrderErr.UPDATE_ORDER_FAILED),
        );
    }
  }
};
