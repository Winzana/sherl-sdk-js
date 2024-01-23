import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IProductResponse } from '../../types';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves details of a specific product identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the product to be retrieved.
 * @returns {Promise<IProductResponse>} A promise that resolves to the detailed information of the specified product.
 */
export const getProduct = async (
  fetcher: Fetcher,
  id: string,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.get<IProductResponse>(
      StringUtils.bindContext(endpoints.GET_PRODUCT, { id }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_PRODUCT_BY_ID_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ProductErr.GET_PUBLIC_PRODUCT_BY_ID_FAILED),
        );
    }
  }
};
