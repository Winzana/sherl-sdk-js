import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

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

    switch (response.status) {
      case 204:
        return response.data;
      case 404:
        throw errorFactory.create(
          CmsErr.CMS_DELETE_MEDIA_FAILED_MEDIA_NOT_EXIST,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_DELETE_MEDIA_FAILED);
    }
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_DELETE_MEDIA_FAILED);
  }
};
