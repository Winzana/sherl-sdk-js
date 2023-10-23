import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateAvailabilityInput } from '../types';

export const enableToOrganization = async (
  fetcher: Fetcher,
  enableToOrganization: INotificationUpdateAvailabilityInput,
  id: string,
): Promise<INotification> => {
  const response = await fetcher
    .post<INotification>(
      StringUtils.bindContext(endpoints.ENABLE_TO_ORGANIZATION, { id }),
      enableToOrganization,
    )
    .catch((_err) => {
      throw errorFactory.create(NotificationErr.ENABLED_FAILED);
    });
  if (response.status >= 300) {
    throw errorFactory.create(NotificationErr.ENABLED_FAILED);
  }

  return response.data;
};
