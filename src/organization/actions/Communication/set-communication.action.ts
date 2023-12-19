import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICommunicationInputDto, IOrganizationResponse } from '../../types';

/**
 * Sets communication details for an organization specified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the communication details are being set.
 * @param {ICommunicationInputDto} communicationInfo - The communication details to be set for the organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after setting the communication details.
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
