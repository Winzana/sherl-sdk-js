import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse, IMediaCreateInputDto } from '../../types';

export const createPictureFromMedia = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
  request: IMediaCreateInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_PICTURE_FROM_MEDIA, {
        organizationId,
        pictureId,
      }),
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(
        OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED);
  }
};
