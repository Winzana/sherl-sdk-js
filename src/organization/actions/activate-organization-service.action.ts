import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import {
  IOrganizationResponse,
  IActivateOrganizationServiceRequest,
} from '../types';

export const activateOrganizationService = async (
  fetcher: Fetcher,
  request: IActivateOrganizationServiceRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.ACTIVATE_ORGANIZATION_SERVICE, {
      organizationId: request.organizationId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.ACTIVATE_ORGANIZATION_SERVICE_FAILED,
    );
  }

  return response.data;
};
