import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const deleteArticleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  const response = await fetcher.delete<IArticle>(
    StringUtils.bindContext(endpoints.DELETE_FIND_ID, {
      id,
    }),
  );

  if (response.status !== 200) {
    throw errorFactory.create(CmsErr.CMS_DELETE_MEDIA_FAILED);
  }

  return response.data;
};
