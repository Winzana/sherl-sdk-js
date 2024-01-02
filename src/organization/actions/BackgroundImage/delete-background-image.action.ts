import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes the background image of an organization identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose background image is being deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image deletion.
 */
export const deleteBackgroundImage = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DELETE_BACKGROUND_IMAGE, {
        organizationId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
  }
};
