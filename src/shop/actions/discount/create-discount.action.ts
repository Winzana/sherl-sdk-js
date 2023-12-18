import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

/**
 * Validates payment for a shopping basket with pending status.
 *
 * This function sends a POST request to validate the payment for a shopping basket that is in a pending state.
 * The validation details are provided in the IShopBasketValidatePaymentInputDto object. On successful validation,
 * it returns the updated order's information encapsulated in an IOrderResponse object. If the process of validating
 * the pending payment encounters any errors, such as a failure to connect to the endpoint or other issues, a specific
 * error indicating the failure of the validation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopBasketValidatePaymentInputDto} validation - The validation details for the pending payment of the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validating the pending payment.
 * @throws {OrderErr.BASKET_VALIDATE_PENDING_FAILED} Throws an error if the validation of the pending payment fails.
 */
export const createDiscount = async (
  fetcher: Fetcher,
  parameter: IDiscountParameter,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.post<IDiscount>(endpoints.DISCOUNTS, {
      ...parameter,
    });
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.POST_FAILED);
  }
};
