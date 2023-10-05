import { ISearchResult } from '../../../common';
import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IComment, IFindProductCommentsInputDto } from '../../types';

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
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.GET_PRODUCT_COMMENTS_FAILED);
  }
};
