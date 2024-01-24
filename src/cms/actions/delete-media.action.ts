import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

/**
 * Delete a media page in the CMS.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the media page to be deleted.
 * @returns {Promise<IArticle>} A promise that resolves to the deleted media page information.
 */
export const deleteMediaPage = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.delete<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_MEDIA, {
        id,
      }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(CmsErr.DELETE_CMS_MEDIA_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.MEDIA_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CmsErr.DELETE_CMS_MEDIA_FAILED),
        );
    }
  }
};
