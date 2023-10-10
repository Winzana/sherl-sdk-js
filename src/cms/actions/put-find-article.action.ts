import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleUpdateInputDto, IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const putCreateArticle = async (
  fetcher: Fetcher,
  id: string,
  updatedOrganization: ICMSArticleUpdateInputDto,
): Promise<IArticle> => {
  const response = await fetcher.put<IArticle>(
    StringUtils.bindContext(endpoints.PUT_FIND_ID, {
      id,
    }),
    updatedOrganization,
  );

  if (response.status !== 200) {
    throw errorFactory.create(CmsErr.CMS_PUT_FIND_ID_FAILED);
  }

  return response.data;
};
