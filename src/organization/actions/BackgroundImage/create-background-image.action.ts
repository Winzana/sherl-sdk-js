import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IBackgroundImage, ICreateBackgroundImageResponse } from '../../types';

export const createBackgroundImage = async (
  fetcher: Fetcher,
  request: IBackgroundImage,
): Promise<ICreateBackgroundImageResponse> => {
  const response = await fetcher.post<ICreateBackgroundImageResponse>(
    endpoints.CREATE_BACKGROUND_IMAGE,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED);
  }

  return response.data;
};
