import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IPictureFromMedia,
  ICreatePictureFromMediaResponse,
} from '../../types';

export const createPictureFromMedia = async (
  fetcher: Fetcher,
  request: IPictureFromMedia,
): Promise<ICreatePictureFromMediaResponse> => {
  const response = await fetcher.post<ICreatePictureFromMediaResponse>(
    endpoints.CREATE_PICTURE_FROM_MEDIA,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED);
  }

  return response.data;
};
