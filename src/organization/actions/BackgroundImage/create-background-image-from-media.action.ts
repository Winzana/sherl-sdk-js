import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { StringUtils } from '../../../common/utils/string';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IBackgroundImageFromMedia,
  ICreateBackgroundImageFromMediaResponse,
} from '../../types';

export const createBackgroundImageFromMedia = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  request: IBackgroundImageFromMedia,
): Promise<ICreateBackgroundImageFromMediaResponse> => {
  try {
    const response =
      await fetcher.post<ICreateBackgroundImageFromMediaResponse>(
        StringUtils.bindContext(endpoints.CREATE_BACKGROUND_IMAGE_FROM_MEDIA, {
          organizationId,
          mediaId,
        }),
        request,
      );

    if (response.status !== 200) {
      throw errorFactory.create(
        OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED,
    );
  }
};
