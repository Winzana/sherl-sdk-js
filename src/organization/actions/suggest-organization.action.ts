import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ISuggestOrganizationRequest } from '../types';

export const suggestOrganization = async (
  fetcher: Fetcher,
  suggestion: ISuggestOrganizationRequest,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.SUGGEST_ORGANIZATION,
      suggestion,
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.SUGGEST_ORGANIZATION_FORBIDDEN,
        );
      default:
        throw errorFactory.create(OrganizationErr.SUGGEST_ORGANIZATION_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.SUGGEST_ORGANIZATION_FAILED),
    );
  }
};
