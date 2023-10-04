import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';

export const clearBasket = async (
  fetcher: Fetcher,
  customerId: string,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(endpoints.CLEAR_BASKET, {
      customerId,
    });

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_CLEAR_FAILED);
  }
};
