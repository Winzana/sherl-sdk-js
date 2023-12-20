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
  } catch (error) {
    throw errorFactory.create(
      errorsByCode[(error as any).status as keyof typeof errorsByCode],
    );
  }
};
