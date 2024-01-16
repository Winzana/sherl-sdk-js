import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';

export const clearBasket = async (
  fetcher: Fetcher,
  customerId: string,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(endpoints.CLEAR_BASKET, {
      customerId,
    });
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BasketErr.BASKET_CLEAR_FORBIDDEN);
      default:
        throw errorFactory.create(BasketErr.BASKET_CLEAR_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.BASKET_CLEAR_FAILED),
    );
  }
};
