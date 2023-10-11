import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
import { ISearchResult } from '../../common';

export const getPublicFindArticle = async (
  fetcher: Fetcher,
  page: number,
  itemsPerPage: number,
  authorUri: string,
  id: string,
  slug: string,
  organizationUri: string,
  type: string,
  beginDate: string,
  endDate: string,
  status: string,
): Promise<ISearchResult<IArticle>> => {
  try {
    const response = await fetcher.get<ISearchResult<IArticle>>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ARTICLE, {
        slug,
        id,
        page,
        itemsPerPage,
        authorUri,
        organizationUri,
        type,
        beginDate,
        endDate,
        status,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLE_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLE_FAILED);
  }
};
