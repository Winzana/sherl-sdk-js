import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
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

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_ADD_FAILED);
  }
};
