import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(DiscountErr.VALIDATE_DISCOUNT_CODE_FORBIDDEN);
      case 404:
        throw errorFactory.create(DiscountErr.DISCOUNT_CODE_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(DiscountErr.VALIDATE_DISCOUNT_CODE_FAILED),
        );
    }
  }
};
