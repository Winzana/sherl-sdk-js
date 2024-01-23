import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';
/**
 * Get an article by its unique identifier.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the retrieved article information.
 */
export const getArticleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_POSTS, { id }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(CmsErr.CMS_GET_BY_ID_FAILED_POST_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.ARTICLE_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CmsErr.CMS_GET_BY_ID_FAILED),
        );
    }
  }
};
