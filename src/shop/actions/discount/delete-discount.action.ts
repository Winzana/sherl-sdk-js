import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscount } from '../../types';

/**
 * Deletes a specific discount identified by its unique ID.
 *
 * This function sends a DELETE request to remove a discount. The discount's unique ID is used to construct
 * the endpoint for the request. On successful deletion, it returns the information of the deleted discount
 * encapsulated in an IDiscount object. If the deletion process encounters any errors, such as a failure to
 * connect to the endpoint or other issues, a specific error indicating the failure of the discount deletion is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} discountId - The unique identifier of the discount to be deleted.
 * @returns {Promise<IDiscount>} A promise that resolves to the information of the deleted discount.
 * @throws {DiscountErr.DELETE_FAILED} Throws an error if the deletion of the discount fails.
 */
export const deleteDiscount = async (
  fetcher: Fetcher,
  discountId: string,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.delete<IDiscount>(
      StringUtils.bindContext(endpoints.MANAGE_DISCOUNT, {
        id: discountId,
      }),
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.DELETE_FAILED);
  }
};
