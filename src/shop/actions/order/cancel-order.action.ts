import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ICancelOrderInputDto, IOrderResponse } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';

const errorsByCode = {
  400: OrderErr.BAD_REQUEST,
  401: OrderErr.NOT_ALLOWED,
  409: OrderErr.ALREADY_CHANGED,
};

/**
 * Cancels an order with specified cancellation details.
 *
 * This function sends a POST request to cancel an order identified by its unique ID. The cancellation details are
 * provided in the ICancelOrderInputDto object. On successful cancellation, it returns the updated order's information
 * encapsulated in an IOrderResponse object. If the cancellation process encounters any errors, such as a failure to
 * connect to the endpoint or specific conditions not being met (e.g., bad request, not allowed, or order already
 * changed), corresponding specific errors are thrown. The function maps various error statuses to predefined error
 * codes using the `errorsByCode` object.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the order to be cancelled.
 * @param {ICancelOrderInputDto} cancelOrderDates - The details of the cancellation request for the order.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after cancellation.
 * @throws {OrderErr} Throws specific OrderErr errors based on the encountered condition (e.g., BAD_REQUEST, NOT_ALLOWED, ALREADY_CHANGED).
 */
export const cancelOrder = async (
  fetcher: Fetcher,
  id: string,
  cancelOrderDates: ICancelOrderInputDto,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      StringUtils.bindContext(endpoints.CANCEL_ORDER, { id }),
      cancelOrderDates,
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      errorsByCode[(error as any).status as keyof typeof errorsByCode],
    );
  }
};
