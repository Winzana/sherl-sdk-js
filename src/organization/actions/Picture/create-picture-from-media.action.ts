import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse, IMediaCreateInputDto } from '../../types';

/**
 * Creates a picture for an organization from a specified media.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
 * @param {string} pictureId - The unique identifier of the picture to be created.
 * @param {IMediaCreateInputDto} picture - The media data for creating the picture.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
 */
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
