import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
import { IOrderResponse } from '../../types';

/**
 * Applies a discount code to the current shopping basket.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} code - The discount code to be applied to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the discount code.
 */
export const addDiscountCodeToBasket = async (
  fetcher: Fetcher,
  code: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.DISCOUNT_CODE_BASKET,
      { code },
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BasketErr.BASKET_DISCOUNT_CODE_FORBIDDEN);
      case 404:
        throw errorFactory.create(BasketErr.CODE_NOT_FOUND);
      default:
        throw errorFactory.create(BasketErr.BASKET_DISCOUNT_CODE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.BASKET_DISCOUNT_CODE_FAILED),
    );
  }
};
