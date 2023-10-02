import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

export const addSponsorCodeToBasket = async (
  fetcher: Fetcher,
  code: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.SPONSOR_CODE_BASKET,
      { code },
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrderErr.BASKET_SPONSOR_CODE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_SPONSOR_CODE_FAILED);
  }
};
