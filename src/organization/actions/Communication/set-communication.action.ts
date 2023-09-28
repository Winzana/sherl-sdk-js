import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICommunicationInputDto, IOrganizationResponse } from '../../types';

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
