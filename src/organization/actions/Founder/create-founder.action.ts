import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateFounderDto, IFounder } from '../../types';

/**
 * Creates a new founder record for a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the founder is being added.
 * @param {ICreateFounderDto} founder - The details of the founder to be added.
 * @returns {Promise<IFounder>} A promise that resolves to the information of the newly created founder.
 */
export const createFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founder: ICreateFounderDto,
): Promise<IFounder> => {
  try {
    const response = await fetcher.post<IFounder>(
      StringUtils.bindContext(endpoints.CREATE_FOUNDER, {
        organizationId,
      }),
      founder,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED),
        );
    }
  }
};
