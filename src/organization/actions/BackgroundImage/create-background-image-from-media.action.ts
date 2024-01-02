import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { StringUtils } from '../../../common/utils/string';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';
import { IImageObject } from '../../../media';

/**
 * Creates a background image for an organization from a media object.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the background image is being set.
 * @param {string} mediaId - The unique identifier of the media to be used as the background image.
 * @param {IImageObject} image - The image object to be set as the background.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image creation.
 */
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
