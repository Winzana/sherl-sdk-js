import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotificationToOrganization } from '../types';
//todo : replace "any" by the api return
export const enableToOrganization = async (
  fetcher: Fetcher,
  enableToOrganization: INotificationToOrganization,
  id: string,
): Promise<any> => {
  const response = await fetcher
    .post<any>(
      StringUtils.bindContext(endpoints.ENABLE_TO_ORGANIZATION, { id }),
      enableToOrganization,
    )
    .catch((_err) => {
      throw errorFactory.create(NotificationErr.POST_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(NotificationErr.POST_FAILED);
  }

  return response.data;
};
