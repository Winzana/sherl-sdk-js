import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscount } from '../../types';

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
