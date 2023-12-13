import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { StringUtils } from '../../../common/utils/string';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';
import { IImageObject } from '../../../media';
import { filterSherlError } from '../../../common/utils/error';

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

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_NOT_FOUND);
      case 409:
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_ALREADY_EXISTS);
      default:
        throw errorFactory.create(
          OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED,
        );
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(
        OrganizationErr.CREATE_BACKGROUND_IMAGE_FROM_MEDIA_FAILED,
      ),
    );
  }
};
