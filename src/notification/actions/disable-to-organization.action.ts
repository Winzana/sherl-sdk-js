import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateAvailabilityInput } from '../types';

export const disableToOrganization = async (
  fetcher: Fetcher,
  disableToOrganization: INotificationUpdateAvailabilityInput,
  id: string,
): Promise<INotification> => {
  const response = await fetcher
    .post<INotification>(
      StringUtils.bindContext(endpoints.ENABLE_TO_ORGANIZATION, { id }),
      disableToOrganization,
    )
    .catch((_err) => {
      throw errorFactory.create(NotificationErr.DISABLED_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(NotificationErr.DISABLED_FAILED);
  }

  return response.data;
};
