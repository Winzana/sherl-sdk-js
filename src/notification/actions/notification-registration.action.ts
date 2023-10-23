import { Fetcher } from '../../common/api';
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
  const response = await fetcher
    .post<INotificationRegistrationResponse>(
      endpoints.REGISTRATION,
      notificationRegistration,
    )
    .catch((_err) => {
      throw errorFactory.create(NotificationErr.POST_FAILED);
    });
  if (response.status >= 300) {
    throw errorFactory.create(NotificationErr.POST_FAILED);
  }

  return response.data;
};
