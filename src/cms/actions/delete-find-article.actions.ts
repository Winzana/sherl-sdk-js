import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const deleteArticleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.delete<IArticle>(
      StringUtils.bindContext(endpoints.DELETE_ARTICLE_BY_ID, {
        id,
      }),
    );

    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_DELETE_FIND_ID_FAILED);
  }
};
