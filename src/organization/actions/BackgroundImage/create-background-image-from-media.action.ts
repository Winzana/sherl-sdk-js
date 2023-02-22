import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IBackgroundImageFromMedia,
  ICreateBackgroundImageFromMediaResponse,
} from '../../types';

export const createBackgroundImageFromMedia = async (
  fetcher: Fetcher,
  request: IBackgroundImageFromMedia,
): Promise<ICreateBackgroundImageFromMediaResponse> => {
  const response = await fetcher.post<ICreateBackgroundImageFromMediaResponse>(
    endpoints.CREATE_BACKGROUND_IMAGE_FROM_MEDIA,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED,
    );
  }

  return response.data;
};
