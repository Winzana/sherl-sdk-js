import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IBackgroundImage, ICreateBackgroundImageResponse } from '../../types';

export const createBackgroundImage = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  request: IBackgroundImage,
): Promise<ICreateBackgroundImageResponse> => {
  const response = await fetcher.post<ICreateBackgroundImageResponse>(
    StringUtils.bindContext(endpoints.CREATE_BACKGROUND_IMAGE, {
      organizationId,
      mediaId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED);
  }

  return response.data;
};
