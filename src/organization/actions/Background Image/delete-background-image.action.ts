import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteBackgroundImageResponse, IBackgroundImage } from '../../types';

export const deleteBackgroundImage = async (
  fetcher: Fetcher,
  request: IBackgroundImage,
): Promise<IDeleteBackgroundImageResponse> => {
  const response = await fetcher.post<IBackgroundImage>(
    endpoints.DELETE_BACKGROUND_IMAGE,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
  }

  return response.data;
};
