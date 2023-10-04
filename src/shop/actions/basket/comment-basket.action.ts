import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

export const commentBasket = async (
  fetcher: Fetcher,
  comment: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.COMMENT_BASKET,
      { comment },
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_COMMENT_FAILED);
  }
};
