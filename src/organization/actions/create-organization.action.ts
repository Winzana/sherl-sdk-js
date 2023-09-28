import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ICreateOrganizationInputDto } from '../types';

export const createOrganization = async (
  fetcher: Fetcher,
  organization: ICreateOrganizationInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.CREATE_ORGANIZATION,
      organization,
    );

    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
  }
};
