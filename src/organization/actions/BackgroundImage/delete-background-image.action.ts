import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteBackgroundImageResponse } from '../../types';

export const deleteBackgroundImage = async (
  fetcher: Fetcher,
  id: string,
  request: object,
): Promise<IDeleteBackgroundImageResponse> => {
  const response = await fetcher.post<IDeleteBackgroundImageResponse>(
    StringUtils.bindContext(endpoints.DELETE_BACKGROUND_IMAGE, {
      id,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
  }

  return response.data;
};
