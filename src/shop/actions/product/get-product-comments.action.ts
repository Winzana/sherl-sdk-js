import { ISearchResult } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IComment, IFindProductCommentsInputDto } from '../../types';

/**
 * Retrieves comments for a specific product, optionally filtered by specific criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} productId - The unique identifier of the product for which comments are being retrieved.
 * @param {IFindProductCommentsInputDto} [filters] - Optional filters to apply when fetching product comments.
 * @returns {Promise<ISearchResult<IComment>>} A promise that resolves to a search result containing the list of comments for the specified product.
 */
export const getProductComments = async (
  fetcher: Fetcher,
  productId: string,
  filters?: IFindProductCommentsInputDto,
): Promise<ISearchResult<IComment>> => {
  try {
    const response = await fetcher.get<ISearchResult<IComment>>(
      StringUtils.bindContext(endpoints.GET_PRODUCT_COMMENTS, {
        id: productId,
      }),
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.GET_PRODUCT_COMMENTS_FORBIDDEN);
      case 404:
        throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.GET_PRODUCT_COMMENTS_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.GET_PRODUCT_COMMENTS_FAILED),
    );
  }
};
