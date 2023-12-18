import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

/**
 * Creates a new discount with specified parameters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IDiscountParameter} parameter - The parameters defining the discount, including details like percentage, validity, etc.
 * @returns {Promise<IDiscount>} A promise that resolves to the details of the newly created discount.
 */
export const createDiscount = async (
  fetcher: Fetcher,
  parameter: IDiscountParameter,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.post<IDiscount>(endpoints.DISCOUNTS, {
      ...parameter,
    });

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(DiscountErr.CREATE_DISCOUNT_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(DiscountErr.CREATE_DISCOUNT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.CREATE_DISCOUNT_FAILED),
    );
  }
};
