import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IPicture, ICreatePictureResponse } from '../../types';

export const createPicture = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
  request: IPicture,
): Promise<ICreatePictureResponse> => {
  const response = await fetcher.post<ICreatePictureResponse>(
    StringUtils.bindContext(endpoints.CREATE_PICTURE, {
      organizationId,
      pictureId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED);
  }

  return response.data;
};
