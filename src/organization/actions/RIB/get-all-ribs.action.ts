import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IRib } from '../../types';

/**
 * Retrieves all RIBs associated with a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the RIBs are being retrieved.
 * @returns {Promise<IRib[]>} A promise that resolves to an array of RIBs for the specified organization.
 */
export const getAllRibs = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IRib[]> => {
  try {
    const response = await fetcher.get<IRib[]>(
      StringUtils.bindContext(endpoints.GET_RIB, { organizationId }),
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OrganizationErr.GET_RIBS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.GET_RIBS_FAILED),
        );
    }
  }
};
