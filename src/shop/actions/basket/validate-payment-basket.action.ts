import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
import {
  IOrderResponse,
  IShopBasketValidatePaymentInputDto,
} from '../../types';

export const validatePaymentBasket = async (
  fetcher: Fetcher,
  validation: IShopBasketValidatePaymentInputDto,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.VALIDATE_PENDING_BASKET,
      { validation },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          BasketErr.BASKET_VALIDATE_PENDING_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(BasketErr.BASKET_VALIDATE_PENDING_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.BASKET_VALIDATE_PENDING_FAILED),
    );
  }
};
