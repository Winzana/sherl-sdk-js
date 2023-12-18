import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BasketErr.BASKET_REMOVE_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(BasketErr.PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(BasketErr.BASKET_REMOVE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.BASKET_REMOVE_FAILED),
    );
  }
};
