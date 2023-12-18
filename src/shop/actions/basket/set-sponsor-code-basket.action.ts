import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Applies a sponsor code to the current shopping basket.
 *
 * This function sends a POST request to apply a sponsor code to the current shopping basket. The sponsor code
 * is provided as a string. On successful application, it returns the updated order's information encapsulated
 * in an IOrderResponse object. If the process of applying the sponsor code to the basket encounters any errors,
 * such as a non-200 status response or other issues, a specific error indicating the failure of the sponsor code
 * application is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} code - The sponsor code to be applied to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the sponsor code.
 * @throws {OrderErr.BASKET_SPONSOR_CODE_FAILED} Throws an error if the application of the sponsor code to the basket fails.
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
