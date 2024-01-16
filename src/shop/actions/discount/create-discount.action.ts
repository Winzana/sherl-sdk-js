import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

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
        throw errorFactory.create(DiscountErr.CREATE_DISCOUNT_FORBIDDEN);
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
