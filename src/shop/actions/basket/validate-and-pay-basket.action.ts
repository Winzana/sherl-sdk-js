import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse, IShopBasketValidateAndPayDto } from '../../types';

const ERRORS_BY_CODE = {
  460: OrderErr.NO_DEFAULT_CARD,
  461: OrderErr.BASKET_ORDER_NOT_VALIDATED,
  462: OrderErr.BASKET_ALREADY_PAYED,
};

/**
 * Validates and processes payment for the current shopping basket.
 *
 * This function sends a POST request to validate the shopping basket and process its payment. The validation
 * details, including payment information, are provided in the IShopBasketValidateAndPayDto object. On successful
 * validation and payment, it returns the updated order's information encapsulated in an IOrderResponse object. If the
 * validation or payment process encounters any errors, or if specific conditions are not met (like no default card
 * available, basket not validated, or basket already paid), corresponding specific errors are thrown.
 *
 * The function maps various error statuses to predefined error codes using the ERRORS_BY_CODE object.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopBasketValidateAndPayDto} validation - The validation and payment details for the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validation and payment.
 * @throws {OrderErr} Throws specific OrderErr errors based on the encountered condition (e.g., NO_DEFAULT_CARD, BASKET_ORDER_NOT_VALIDATED, BASKET_ALREADY_PAYED).
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

    return response.data;
  } catch (error) {
    let err = OrderErr.FETCH_FAILED;
    if (error && (error as any).status) {
      err =
        ERRORS_BY_CODE[(error as any).status as keyof typeof ERRORS_BY_CODE];
    }
    throw errorFactory.create(err);
  }
};
