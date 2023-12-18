import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse, IShopBasketAddProductInputDto } from '../../types';

/**
 * Adds a product to a shopping basket.
 *
 * This function sends a POST request to add a specified product to a shopping basket. The product details are
 * provided in the IShopBasketAddProductInputDto object. On successful addition, it returns the updated order's
 * information encapsulated in an IOrderResponse object. If the process of adding the product to the basket encounters
 * any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating the failure
 * of the addition is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopBasketAddProductInputDto} product - The details of the product to be added to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order.
 * @throws {OrderErr.BASKET_ADD_FAILED} Throws an error if the addition of the product to the basket fails.
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
