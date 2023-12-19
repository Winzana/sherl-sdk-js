import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStoryCreateInputDto } from '../types';

/**
 * Create a new stories page in the CMS.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleStoryCreateInputDto} data - The data for creating a new stories page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created stories page information.
 */
export const createStoriesPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStoryCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.CREATE_STORIES,
      data,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          CmsErr.CREATE_CMS_STORIES_FAILED_CMS_FORBIDDEN,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED),
    );
  }
};
