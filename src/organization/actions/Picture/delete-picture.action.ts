import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeletePictureResponse } from '../../types';

export const deletePicture = async (
  fetcher: Fetcher,
  id: string,
  mediaId: string,
  request: object,
): Promise<IDeletePictureResponse> => {
  const response = await fetcher.post<IDeletePictureResponse>(
    StringUtils.bindContext(endpoints.DELETE_PICTURE, {
      id,
      mediaId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_PICTURE_FAILED);
  }

  return response.data;
};
