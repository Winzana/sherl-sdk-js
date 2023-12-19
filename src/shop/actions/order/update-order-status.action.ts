import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse, OrderStatusEnum } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';

const errorsByCode = {
  400: OrderErr.BAD_REQUEST,
  401: OrderErr.NOT_ALLOWED,
  409: OrderErr.ALREADY_CHANGED,
};

/**
 * Updates the status of a specific order.
 *
 * This function sends a POST request to update the status of an order identified by its unique ID. The new status
 * of the order is provided as an OrderStatusEnum value. On successful update, it returns the updated order's
 * information encapsulated in an IOrderResponse object. If the update process encounters any errors, such as a
 * failure to connect to the endpoint or specific conditions not being met (e.g., bad request, not allowed, or
 * order already changed), corresponding specific errors are thrown. The function maps various error statuses to
 * predefined error codes using the `errorsByCode` object.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the order whose status is being updated.
 * @param {OrderStatusEnum} status - The new status to be set for the order.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order.
 * @throws {OrderErr} Throws specific OrderErr errors based on the encountered condition (e.g., BAD_REQUEST, NOT_ALLOWED, ALREADY_CHANGED).
 */
export const updateOrderStatus = async (
  fetcher: Fetcher,
  id: string,
  status: OrderStatusEnum,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      StringUtils.bindContext(endpoints.UPDATE_ORDER_STATUS, { id, status }),
      {},
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      errorsByCode[(error as any).status as keyof typeof errorsByCode],
    );
  }
};
