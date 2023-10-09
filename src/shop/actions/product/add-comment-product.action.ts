import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IAddCommentOnProductDto, IComment } from '../../types';

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
