import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import {
  INotificationRegistration,
  INotificationRegistrationResponse,
} from '../types';

/**
 * Register a notification.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {INotificationRegistration} notificationRegistration - Data for registering the notification.
 * @returns {Promise<INotificationRegistrationResponse>} A promise that resolves to an INotificationRegistrationResponse.
 */
export const notificationRegistration = async (
  fetcher: Fetcher,
  notificationRegistration: INotificationRegistration,
): Promise<INotificationRegistrationResponse> => {
  try {
    const response = await fetcher.post<INotificationRegistrationResponse>(
      endpoints.REGISTRATION,
      notificationRegistration,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          NotificationErr.NOTIFICATION_REGISTRATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(NotificationErr.NOTIFICATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(NotificationErr.NOTIFICATION_REGISTRATION_FAILED),
        );
    }
  }
};
