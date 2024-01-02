import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { StringUtils } from '../../../common/utils/string';
import { IAddKYCDocument, IKYCDocument } from '../../types';

/**
 * Adds a KYC document to a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the KYC document is being added.
 * @param {IAddKYCDocument} document - The KYC document details to be added.
 * @param {(progressEvent: any) => void} [onUploadProgress] - Optional callback to monitor the progress of the upload.
 * @returns {Promise<IKYCDocument>} A promise that resolves to the information of the newly added KYC document.
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
