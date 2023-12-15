import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateAvailabilityInput } from '../types';

export const enableToOrganization = async (
  fetcher: Fetcher,
  enableToOrganization: INotificationUpdateAvailabilityInput,
  id: string,
): Promise<INotification> => {
  try {
    const response = await fetcher.post<INotification>(
      StringUtils.bindContext(endpoints.ENABLE_TO_ORGANIZATION, { id }),
      enableToOrganization,
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          NotificationErr.ENABLE_TO_ORGANIZATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(NotificationErr.NOTIFICATION_NOT_FOUND);
      default:
        throw errorFactory.create(NotificationErr.ENABLED_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(NotificationErr.ENABLED_FAILED),
    );
  }
};
