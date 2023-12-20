import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Applies a sponsor code to the current shopping basket.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} code - The sponsor code to be applied to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the sponsor code.
 */
export const addSponsorCodeToBasket = async (
  fetcher: Fetcher,
  code: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.SPONSOR_CODE_BASKET,
      { code },
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrderErr.BASKET_SPONSOR_CODE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_SPONSOR_CODE_FAILED);
  }
};
