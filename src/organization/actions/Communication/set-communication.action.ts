import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICommunicationInputDto, IOrganizationResponse } from '../../types';

/**
 * Sets communication details for an organization specified by its unique ID.
 *
 * This function sends a POST request to set or update the communication details for an organization.
 * It uses the organization's unique ID to construct the endpoint and the communication information
 * provided in the ICommunicationInputDto object. On successful setting or updating, it returns the
 * updated organization's information encapsulated in an IOrganizationResponse object.
 * If the setting or updating process encounters any errors, such as a non-201 status response or
 * connectivity issues, a specific error indicating the failure of setting the communication details is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the communication details are being set.
 * @param {ICommunicationInputDto} communicationInfo - The communication details to be set for the organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after setting the communication details.
 * @throws {OrganizationErr.SET_COMMUNICATION_FAILED} Throws an error if the operation to set the communication details fails.
 */

export const setCommunication = async (
  fetcher: Fetcher,
  organizationId: string,
  communicationInfo: ICommunicationInputDto,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.POST_SET_COMMUNICATION, {
      organizationId,
    }),
    communicationInfo,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.SET_COMMUNICATION_FAILED);
  }

  return response.data;
};
