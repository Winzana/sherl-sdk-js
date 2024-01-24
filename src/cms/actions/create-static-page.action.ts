import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStaticPageCreateInputDto } from '../types';

/**
 * Create a new static page in the CMS.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleStaticPageCreateInputDto} data - The data for creating a new static page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created static page information.
 */
export const createStaticPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStaticPageCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.CMS_CREATE_STATIC,
      data,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          CmsErr.CREATE_CMS_STATIC_PAGES_FAILED_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(CmsErr.CREATE_CMS_STATIC_PAGES_FAILED),
        );
    }
  }
};
