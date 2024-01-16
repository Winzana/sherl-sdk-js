import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.ADD_COMMENT_ON_PRODUCT_FORBIDDEN);
      default:
        throw errorFactory.create(ProductErr.ADD_COMMENT_ON_PRODUCT_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.ADD_COMMENT_ON_PRODUCT_FAILED),
    );
  }
};
