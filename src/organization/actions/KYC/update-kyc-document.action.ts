import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IImageObject } from '../../../media';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IKYCDocument } from '../../types';

/**
 * Updates a specific KYC document for an organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the KYC document belongs.
 * @param {string} kycId - The unique identifier of the KYC document to be updated.
 * @param {IImageObject} document - The updated KYC document details.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the updated KYC document.
 */
export const updateKycDocument = async (
  fetcher: Fetcher,
  organizationId: string,
  kycId: string,
  document: IImageObject,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IKYCDocument> => {
  try {
    const response = await fetcher.put<IKYCDocument>(
      StringUtils.bindContext(endpoints.UPDATE_DOCUMENT, {
        organizationId,
        kycId,
      }),
      document,
      {
        onUploadProgress,
      },
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.UPDATE_DOCUMENT_FAILED);
  }
};
