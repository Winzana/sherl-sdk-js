import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { StringUtils } from '../../../common/utils/string';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';
import { IImageObject } from '../../../media';

export const createBackgroundImageFromMedia = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  image: IImageObject,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_BACKGROUND_IMAGE_FROM_MEDIA, {
        organizationId,
        mediaId,
      }),
      image,
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
