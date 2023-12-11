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
      StringUtils.bindContext(endpoints.MANAGE_POSTS, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 404:
        throw errorFactory.create(
          CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED_POST_NOT_FOUND,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED);
  }
};
