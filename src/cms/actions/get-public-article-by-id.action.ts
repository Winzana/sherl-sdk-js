import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

/**
 * Get a public article by its unique identifier.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the public article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the retrieved public article information.
 */
export const getPublicArticleById = async (
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
        throw errorFactory.create(
          CmsErr.CMS_GET_PUBLIC_ARTICLE_BY_ID_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(CmsErr.ARTICLE_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED),
        );
    }
  }
};
