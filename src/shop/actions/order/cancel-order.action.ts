import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ICancelOrderInputDto, IOrderResponse } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Cancels an order with specified cancellation details.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the order to be cancelled.
 * @param {ICancelOrderInputDto} cancelOrderDates - The details of the cancellation request for the order.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after cancellation.
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 400:
        throw errorFactory.create(OrderErr.BAD_REQUEST);
      case 401:
        throw errorFactory.create(OrderErr.NOT_ALLOWED);
      case 403:
        throw errorFactory.create(OrderErr.CANCEL_ORDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrderErr.ORDER_NOT_FOUND);
      case 409:
        throw errorFactory.create(OrderErr.ALREADY_CHANGED);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrderErr.CANCEL_ORDER_FAILED),
        );
    }
  }
};
