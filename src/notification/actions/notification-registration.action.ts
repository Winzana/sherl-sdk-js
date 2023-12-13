import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import {
  INotificationRegistration,
  INotificationRegistrationResponse,
} from '../types';

export const notificationRegistration = async (
  fetcher: Fetcher,
  notificationRegistration: INotificationRegistration,
): Promise<INotificationRegistrationResponse> => {
  try {
    const response = await fetcher.post<INotificationRegistrationResponse>(
      endpoints.REGISTRATION,
      notificationRegistration,
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          NotificationErr.NOTIFICATION_REGISTRATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(NotificationErr.NOTIFICATION_NOT_FOUND);
      default:
        throw errorFactory.create(NotificationErr.POST_FAILED);
    }
  } catch (error) {
    const sherlError = getSherlError(
      error,
      errorFactory.create(NotificationErr.POST_FAILED),
    );
    throw sherlError;
  }
};
