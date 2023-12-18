import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

export const updateDiscount = async (
  fetcher: Fetcher,
  discountId: string,
  updatedDiscount: Partial<IDiscountParameter>,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.put<IDiscount>(
      StringUtils.bindContext(endpoints.MANAGE_DISCOUNT, {
        id: discountId,
      }),
      updatedDiscount,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(DiscountErr.UPDATE_DISCOUNT_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(DiscountErr.DISCOUNT_NOT_FOUND);
      default:
        throw errorFactory.create(DiscountErr.UPDATE_DISCOUNT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.UPDATE_DISCOUNT_FAILED),
    );
  }
};
