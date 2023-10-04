import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
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

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_VALIDATE_PENDING_FAILED);
  }
};
