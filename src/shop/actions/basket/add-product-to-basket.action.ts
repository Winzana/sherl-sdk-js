import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
import { IOrderResponse, IShopBasketAddProductInputDto } from '../../types';

/**
 * Adds a product to a shopping basket.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopBasketAddProductInputDto} product - The details of the product to be added to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order.
 */
export const addProductToBasket = async (
  fetcher: Fetcher,
  product: IShopBasketAddProductInputDto,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.ADD_PRODUCT_BASKET,
      product,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BasketErr.BASKET_ADD_FORBIDDEN);
      default:
        throw errorFactory.create(BasketErr.BASKET_ADD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.BASKET_ADD_FAILED),
    );
  }
};
