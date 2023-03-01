import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ISuggestOrganizationRequest } from '../types';

export const suggestOrganization = async (
  fetcher: Fetcher,
  request: ISuggestOrganizationRequest,
): Promise<any> => {
  const response = await fetcher.post<any>(
    endpoints.SUGGEST_ORGANIZATION,
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.SUGGEST_ORGANIZATION_FAILED);
  }

  return response.data;
};
