import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const getPublicArticleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ARTICLE_BY_ID, { id }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED);
  }
};
