import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleCreateInputDto } from '../types';
/**
 * Create a new posts page in the CMS.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleCreateInputDto} data - The data for creating a new posts page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created posts page information.
 */
export const createPostsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.MANAGE_ARTICLES,
      data,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(CmsErr.CREATE_CMS_POSTS_FAILED_CMS_FORBIDDEN);
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED),
    );
  }
};
