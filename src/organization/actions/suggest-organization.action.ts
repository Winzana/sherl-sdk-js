import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ISuggestOrganizationRequest } from '../types';

/**
 * Submits a suggestion for an organization based on the provided request details.
 *
 * This function sends a POST request to submit a suggestion for a new or existing organization using the details
 * provided in the ISuggestOrganizationRequest object. On successful submission, it returns the response encapsulated
 * in an IOrganizationResponse object. If the suggestion submission process encounters any errors, such as a
 * non-201 status response or connectivity issues, a specific error indicating the failure of the suggestion
 * submission is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ISuggestOrganizationRequest} suggestion - The details of the organization suggestion.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the response related to the organization suggestion.
 * @throws {OrganizationErr.SUGGEST_ORGANIZATION_FAILED} Throws an error if the organization suggestion submission fails.
 */

export const suggestOrganization = async (
  fetcher: Fetcher,
  suggestion: ISuggestOrganizationRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    endpoints.SUGGEST_ORGANIZATION,
    suggestion,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.SUGGEST_ORGANIZATION_FAILED);
  }

  return response.data;
};
