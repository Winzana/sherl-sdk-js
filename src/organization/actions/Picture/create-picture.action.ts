import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Uploads and creates a picture for an organization from a file.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the picture is being created.
 * @param {string} pictureId - The unique identifier of the picture to be created.
 * @param {File} picture - The picture file to be uploaded.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the picture.
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
