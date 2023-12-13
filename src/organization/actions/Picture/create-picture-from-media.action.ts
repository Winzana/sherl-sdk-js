import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse, IMediaCreateInputDto } from '../../types';

export const createPictureFromMedia = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
  picture: IMediaCreateInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_PICTURE_FROM_MEDIA, {
        organizationId,
        pictureId,
      }),
      picture,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          OrganizationErr.CREATE_PICTURE_FROM_MEDIA_NOT_FOUND,
        );
      case 409:
        throw errorFactory.create(
          OrganizationErr.CREATE_PICTURE_FROM_MEDIA_ALREADY_EXISTS,
        );
      default:
        throw errorFactory.create(
          OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED,
        );
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED),
    );
  }
};
