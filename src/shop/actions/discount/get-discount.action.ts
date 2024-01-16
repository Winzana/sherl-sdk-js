import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IDiscount } from '../../types';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { getSherlError } from '../../../common/utils/errors';

export const getDiscount = async (
  fetcher: Fetcher,
  id: string,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.get<IDiscount>(
      StringUtils.bindContext(endpoints.MANAGE_DISCOUNT, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(DiscountErr.GET_DISCOUNTS_FORBIDDEN);
      default:
        throw errorFactory.create(DiscountErr.GET_DISCOUNTS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.GET_DISCOUNTS_FAILED),
    );
  }
};
