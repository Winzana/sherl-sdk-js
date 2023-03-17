import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeletePictureResponse } from '../../types';

export const deletePicture = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
): Promise<IDeletePictureResponse> => {
  const response = await fetcher.post<IDeletePictureResponse>(
    StringUtils.bindContext(endpoints.DELETE_PICTURE, {
      organizationId,
      pictureId,
    }),
    {},
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_PICTURE_FAILED);
  }

  return response.data;
};
