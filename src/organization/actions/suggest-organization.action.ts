import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ISuggestOrganizationRequest } from '../types';

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
