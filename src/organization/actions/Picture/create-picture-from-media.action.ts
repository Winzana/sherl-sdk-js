import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse, IMediaCreateInputDto } from '../../types';

/**
 * Creates a picture for an organization from a specified media.
 *
 * This function sends a POST request to create a picture for an organization using media data. It requires the
 * organization's unique ID and the picture's unique ID to construct the endpoint. The picture's data is provided
 * in the IMediaCreateInputDto object. On successful creation, it returns the updated organization's information
 * encapsulated in an IOrganizationResponse object. If the creation process encounters any errors, such as a
 * non-200 status response or connectivity issues, a specific error indicating the failure of creating the picture
 * from media is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
 * @param {string} pictureId - The unique identifier of the picture to be created.
 * @param {IMediaCreateInputDto} picture - The media data for creating the picture.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
 * @throws {OrganizationErr.CREATE_PICTURE_FROM_MEDIA_FAILED} Throws an error if the creation of the picture from media fails.
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
