import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICommunication } from '../../types';

export const setCommunication = async (
  fetcher: Fetcher,
  id: string,
  request: ICommunication,
): Promise<ICommunication> => {
  const response = await fetcher.post<ICommunication>(
    StringUtils.bindContext(endpoints.POST_SET_COMMUNICATION, {
      id,
    }),
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.SET_COMMUNICATION_FAILED);
  }

  return response.data;
};
