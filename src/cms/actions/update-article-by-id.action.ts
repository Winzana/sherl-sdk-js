import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleUpdateInputDto } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

/**
 * Update an article by its unique identifier.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the article to be updated.
 * @param {ICMSArticleUpdateInputDto} updatedArticle - The updated article data.
 * @returns {Promise<IArticle>} A promise that resolves to the updated article information.
 */
export const updateArticleById = async (
  fetcher: Fetcher,
  id: string,
  updatedArticle: ICMSArticleUpdateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.put<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_POSTS, {
        id,
      }),
      updatedArticle,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.ARTICLE_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED),
        );
    }
  }
};
