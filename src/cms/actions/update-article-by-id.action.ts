import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleUpdateInputDto, IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const updateArticleById = async (
  fetcher: Fetcher,
  id: string,
  updatedArticle: ICMSArticleUpdateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.put<IArticle>(
      StringUtils.bindContext(endpoints.UPDATE_ARTICLE_BY_ID, {
        id,
      }),
      updatedArticle,
    );

    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED);
  }
};
