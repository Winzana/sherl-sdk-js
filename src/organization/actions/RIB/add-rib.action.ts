import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { IAddRibBody, IRib } from '../../../shop/types';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';

/**
 * Adds a RIB to a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the RIB is being added.
 * @param {IAddRibBody} request - The details of the RIB to be added.
 * @returns {Promise<IRib>} A promise that resolves to the information of the newly added RIB.
 */
export const addRib = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IAddRibBody,
): Promise<IRib> => {
  try {
    const response = await fetcher.post<IRib>(
      StringUtils.bindContext(endpoints.ADD_RIB, {
        organizationId,
      }),
      request,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OrganizationErr.ADD_RIB_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.ADD_RIB_FAILED),
        );
    }
  }
};
