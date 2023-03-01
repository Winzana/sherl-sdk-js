import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse } from '../types';

export const temporarySuspendOrganizationService = async (
  fetcher: Fetcher,
  id: string,
  request: any,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.TEMPORARY_SUSPEND_ORGANIZATION_SERVICE, {
      id,
    }),
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(
      OrganizationErr.TEMPORARY_SUSPEND_ORGANIZATION_SERVICE_FAILED,
    );
  }

  return response.data;
};