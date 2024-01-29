import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IKYCDocument } from '../../types';

/**
 * Retrieves all KYC documents for a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the KYC documents are being retrieved.
 * @returns {Promise<IKYCDocument[]>} A promise that resolves to an array of KYC documents for the specified organization.
 */
export const getAllKycDocuments = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IKYCDocument[]> => {
  try {
    const response = await fetcher.get<IKYCDocument[]>(
      StringUtils.bindContext(endpoints.GET_DOCUMENTS, { organizationId }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OrganizationErr.GET_KYCS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.GET_KYCS_FAILED),
        );
    }
  }
};
