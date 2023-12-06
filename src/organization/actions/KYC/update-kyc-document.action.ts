import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IImageObject } from '../../../media';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IKYCDocument } from '../../types';

/**
 * Updates a specific KYC document for an organization.
 *
 * This function sends a PUT request to update a KYC document associated with an organization. It requires the
 * organization's unique ID and the KYC document's unique ID to construct the endpoint for the request. The updated
 * document details are provided in the IImageObject. An optional onUploadProgress function can be provided to
 * monitor the upload progress. On successful update, it returns the updated KYC document's information encapsulated
 * in an IKYCDocument object. If the update process encounters any errors, such as a non-200 status response or
 * connectivity issues, a specific error indicating the failure of updating the KYC document is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the KYC document belongs.
 * @param {string} kycId - The unique identifier of the KYC document to be updated.
 * @param {IImageObject} document - The updated KYC document details.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the updated KYC document.
 * @throws {OrganizationErr.UPDATE_DOCUMENT_FAILED} Throws an error if the KYC document update fails.
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
