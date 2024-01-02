import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes a picture from a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the picture is being deleted.
 * @param {string} pictureId - The unique identifier of the picture to be deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the picture deletion.
 */
export const deletePicture = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DELETE_PICTURE, {
        organizationId,
        pictureId,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_PICTURE_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_PICTURE_FAILED);
  }
};
