import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IPictureFromMedia,
  ICreatePictureFromMediaResponse,
} from '../../types';

export const createPictureFromMedia = async (
  fetcher: Fetcher,
  id: string,
  mediaId: string,
  request: IPictureFromMedia,
): Promise<ICreatePictureFromMediaResponse> => {
  const response = await fetcher.post<ICreatePictureFromMediaResponse>(
    StringUtils.bindContext(endpoints.CREATE_PICTURE_FROM_MEDIA, {
      id,
      mediaId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED);
  }

  return response.data;
};
