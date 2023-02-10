import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICommunication, ISetCommunication } from '../../types';

export const setCommunication = async (
  fetcher: Fetcher,
  request: ISetCommunication,
): Promise<ICommunication> => {
  const response = await fetcher.post<ICommunication>(
    endpoints.POST_SET_COMMUNICATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.SET_COMMUNICATION_FAILED);
  }

  return response.data;
};
