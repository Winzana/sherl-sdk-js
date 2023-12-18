import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BasketErr.BASKET_COMMENT_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(BasketErr.BASKET_COMMENT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.BASKET_COMMENT_FAILED),
    );
  }
};
