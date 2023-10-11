import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const getFindPosts = async (
  fetcher: Fetcher,
  page: number,
  itemsPerPage: number,
  authorUri: string,
  slug: string,
  organizationUri: string,
  type: string,
  beginDate: string,
  endDate: string,
  status: string,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.GET_FIND_ARTICLE, {
        id,
        page,
        itemsPerPage,
        authorUri,
        slug,
        organizationUri,
        type,
        beginDate,
        endDate,
        status,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_FIND_POSTS_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_FIND_POSTS_FAILED);
  }
};
