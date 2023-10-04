import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

export const removeItemToBasket = async (
  fetcher: Fetcher,
  itemId: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.delete<IOrderResponse>(
      StringUtils.bindContext(endpoints.REMOVE_PRODUCT_BASKET, {
        id: itemId,
      }),
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_REMOVE_FAILED);
  }
};
