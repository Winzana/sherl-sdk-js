import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
import { IOrderResponse, IShopBasketValidateAndPayDto } from '../../types';

/**
 * Validates and processes payment for the current shopping basket.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopBasketValidateAndPayDto} validation - The validation and payment details for the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validation and payment.
 */
export const validateAndPayBasket = async (
  fetcher: Fetcher,
  validation: IShopBasketValidateAndPayDto,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.VALIDATE_PAY_BASKET,
      { validation },
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BasketErr.VALIDATE_AND_PAY_BASKET_FORBIDDEN);
      case 460:
        throw errorFactory.create(BasketErr.NO_DEFAULT_CARD);
      case 461:
        throw errorFactory.create(BasketErr.BASKET_ORDER_NOT_VALIDATED);
      case 462:
        throw errorFactory.create(BasketErr.BASKET_ALREADY_PAYED);
      default:
        throw errorFactory.create(BasketErr.VALIDATE_AND_PAY_BASKET_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.VALIDATE_AND_PAY_BASKET_FAILED),
    );
  }
};
