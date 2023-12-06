import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateFounderDto, IFounder } from '../../types';

/**
 * Creates a new founder record for a specified organization.
 *
 * This function sends a POST request to add a new founder to an organization. It uses the organization's unique ID
 * to construct the endpoint, and the founder's details are provided in the ICreateFounderDto object. On successful
 * creation, it returns the newly created founder's information encapsulated in an IFounder object. If the founder
 * creation process encounters any errors, such as a non-201 status response or connectivity issues, a specific error
 * indicating the failure of the founder creation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the founder is being added.
 * @param {ICreateFounderDto} founder - The details of the founder to be added.
 * @returns {Promise<IFounder>} A promise that resolves to the information of the newly created founder.
 * @throws {OrganizationErr.CREATE_FOUNDER_FAILED} Throws an error if the founder creation fails.
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
    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
  }
};
