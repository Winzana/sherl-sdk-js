import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

export const addDiscountCodeToBasket = async (
  fetcher: Fetcher,
  code: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.DISCOUNT_CODE_BASKET,
      { code },
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_DISCOUNT_CODE_FAILED);
  }
};
