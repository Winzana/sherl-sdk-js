import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Adds a logo to an organization using a media file.
 *
 * This function sends a POST request to upload and set a logo for an organization. It requires the organization's unique ID
 * and the media ID to construct the endpoint. The logo file is sent as form data. An optional onUploadProgress function
 * can be provided to monitor the upload progress. On successful upload and addition, it returns the updated organization's
 * information encapsulated in an IOrganizationResponse object. If the upload or addition process encounters any errors,
 * such as a non-200 status response or connectivity issues, a specific error indicating the failure of adding the logo is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the logo is being set.
 * @param {string} mediaId - The unique identifier of the media to be used as the logo.
 * @param {File} logo - The logo file to be uploaded and set.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the logo addition.
 * @throws {OrganizationErr.ADD_LOGO_FAILED} Throws an error if the logo addition fails.
 */

export const addLogo = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  logo: File,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IOrganizationResponse> => {
  try {
    const formData = new FormData();
    formData.append('upload', logo);
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.ADD_LOGO, {
        organizationId,
        mediaId,
      }),
      formData,
      undefined,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress,
      },
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_LOGO_FAILED);
  }
};
