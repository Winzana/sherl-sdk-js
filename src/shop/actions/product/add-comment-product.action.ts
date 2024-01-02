import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IAddCommentOnProductDto, IComment } from '../../types';

/**
 * Adds a comment on a specific product.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IAddCommentOnProductDto} productComment - The details of the comment to be added to the product.
 * @returns {Promise<IComment>} A promise that resolves to the information of the newly added comment.
 */
export const addCommentOnProduct = async (
  fetcher: Fetcher,
  productComment: IAddCommentOnProductDto,
): Promise<IComment> => {
  try {
    const response = await fetcher.post<IComment>(
      endpoints.COMMENT_PRODUCT,
      productComment,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.ADD_PRODUCT_LIKES_FAILED);
  }
};
