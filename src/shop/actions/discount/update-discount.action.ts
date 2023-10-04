import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.UPDATE_FAILED);
  }
};
