import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Uploads and creates a picture for an organization from a file.
 *
 * This function sends a POST request to upload a picture for an organization. It uses the organization's unique ID
 * and the picture's unique ID to construct the endpoint. The picture file is sent as form data. An optional
 * onUploadProgress function can be provided to monitor the upload progress. On successful upload and creation,
 * it returns the updated organization's information encapsulated in an IOrganizationResponse object. If the upload
 * or creation process encounters any errors, such as a non-200 status response or connectivity issues, a specific
 * error indicating the failure of creating the picture is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
 * @param {string} pictureId - The unique identifier of the picture to be created.
 * @param {File} picture - The picture file to be uploaded.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
 * @throws {OrganizationErr.CREATE_PICTURE_FAILED} Throws an error if the creation of the picture fails.
 */

export const createPicture = async (
  fetcher: Fetcher,
  organizationId: string,
  pictureId: string,
  picture: File,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IOrganizationResponse> => {
  try {
    const formData = new FormData();
    formData.append('upload', picture);
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_PICTURE, {
        organizationId,
        pictureId,
      }),
      formData,
      undefined,
      {
        headers: {
          'Content-Type': 'mutlipart/form-data',
        },
        onUploadProgress,
      },
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_PICTURE_FAILED);
  }
};
