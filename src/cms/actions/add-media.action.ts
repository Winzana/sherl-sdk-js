import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleAddMediaDto } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

/**
 * Add media to an existing CMS page.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The identifier of the CMS page to which media is being added.
 * @param {ICMSArticleAddMediaDto} data - The data for adding media to the CMS page.
 * @returns {Promise<IArticle>} A promise that resolves to the updated article information.
 */
export const addMediaPage = async (
  fetcher: Fetcher,
  id: string,
  data: ICMSArticleAddMediaDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_MEDIA, {
        id,
      }),
      data,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.MEDIA_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED),
        );
    }
  }
};
