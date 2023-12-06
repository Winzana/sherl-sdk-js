import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { StringUtils } from '../../../common/utils/string';
import { IAddKYCDocument, IKYCDocument } from '../../types';

/**
 * Adds a KYC document to a specified organization.
 *
 * This function sends a POST request to add a KYC document to an organization. It uses the organization's unique ID
 * to construct the endpoint, and the KYC document details are provided in the IAddKYCDocument object. An optional
 * onUploadProgress function can be provided to monitor the upload progress. On successful addition, it returns the
 * newly added KYC document's information encapsulated in an IKYCDocument object. If the document addition process
 * encounters any errors, such as a non-201 status response or connectivity issues, a specific error indicating
 * the failure of the document addition is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the KYC document is being added.
 * @param {IAddKYCDocument} document - The KYC document details to be added.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the newly added KYC document.
 * @throws {OrganizationErr.ADD_DOCUMENT_FAILED} Throws an error if the KYC document addition fails.
 */

export const addKycDocument = async (
  fetcher: Fetcher,
  organizationId: string,
  document: IAddKYCDocument,
  onUploadProgress?: (progressEvent: any) => void,
): Promise<IKYCDocument> => {
  try {
    const response = await fetcher.post<IKYCDocument>(
      StringUtils.bindContext(endpoints.ADD_DOCUMENT, {
        organizationId,
      }),
      document,
      undefined,
      {
        onUploadProgress,
      },
    );

    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_DOCUMENT_FAILED);
  }
};
