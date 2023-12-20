import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscount } from '../../types';

/**
 * Validates a discount code against a specific product.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} code - The discount code to be validated.
 * @param {string} productUri - The URI of the product against which the discount code is being validated.
 * @returns {Promise<IDiscount>} A promise that resolves to the information of the discount if the code is valid.
 */
export const validateDiscountCode = async (
  fetcher: Fetcher,
  code: string,
  productUri: string,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.post<IDiscount>(
      endpoints.VALIDATE_DISCOUNT_CODE,
      {
        code,
        productUri,
      },
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.VALIDATE_CODE_FAILED);
  }
};
