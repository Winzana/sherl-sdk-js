import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICommunicationInputDto, IOrganizationResponse } from '../../types';

export const setCommunication = async (
  fetcher: Fetcher,
  organizationId: string,
  communicationInfo: ICommunicationInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.POST_SET_COMMUNICATION, {
        organizationId,
      }),
      communicationInfo,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.SET_COMMUNICATION_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.SET_COMMUNICATION_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.SET_COMMUNICATION_FAILED),
    );
  }
};
