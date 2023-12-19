import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IUploadData } from '../../../media';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Creates a background image for an organization by uploading a file.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the background image is being set.
 * @param {string} mediaId - The unique identifier of the media associated with the background image.
 * @param {File} file - The image file to be uploaded and set as the background.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image creation.
 */
export const createBackgroundImage = async (
  fetcher: Fetcher,
  organizationId: string,
  mediaId: string,
  file: File,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IOrganizationResponse> => {
  try {
    const formData = new FormData();
    formData.append('upload', file);
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_BACKGROUND_IMAGE, {
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
      throw errorFactory.create(OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_BACKGROUND_IMAGE_FAILED);
  }
};
