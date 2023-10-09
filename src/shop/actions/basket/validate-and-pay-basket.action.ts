import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse, IShopBasketValidateAndPayDto } from '../../types';

const ERRORS_BY_CODE = {
  460: OrderErr.NO_DEFAULT_CARD,
  461: OrderErr.BASKET_ORDER_NOT_VALIDATED,
  462: OrderErr.BASKET_ALREADY_PAYED,
};

export const validateAndPayBasket = async (
  fetcher: Fetcher,
  validation: IShopBasketValidateAndPayDto,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.VALIDATE_PAY_BASKET,
      { validation },
    );

    return response.data;
  } catch (error) {
    let err = OrderErr.FETCH_FAILED;
    if (error && (error as any).status) {
      err =
        ERRORS_BY_CODE[(error as any).status as keyof typeof ERRORS_BY_CODE];
    }
    throw errorFactory.create(err);
  }
};
