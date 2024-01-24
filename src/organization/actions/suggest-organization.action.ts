import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ISuggestOrganizationRequest } from '../types';

/**
 * Submits a suggestion for an organization based on the provided request details.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ISuggestOrganizationRequest} suggestion - The details of the organization suggestion.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the response related to the organization suggestion.
 */
export const suggestOrganization = async (
  fetcher: Fetcher,
  suggestion: ISuggestOrganizationRequest,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.SUGGEST_ORGANIZATION,
      suggestion,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          OrganizationErr.SUGGEST_ORGANIZATION_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.SUGGEST_ORGANIZATION_FAILED),
        );
    }
  }
};
