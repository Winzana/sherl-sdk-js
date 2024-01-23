import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { NotificationTypeEnum, SendNotificationInput } from '../types';

/**
 * Send a notification by its type.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {NotificationTypeEnum} notificationType - The type of notification to send.
 * @param {SendNotificationInput} notificationInfo - Information for sending the notification.
 * @returns {Promise<boolean>} A promise that resolves to a boolean value (true if successful).
 */
export const sendNotificationByType = async (
  fetcher: Fetcher,
  notificationType: NotificationTypeEnum,
  notificationInfo: SendNotificationInput,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(
      StringUtils.bindContext(endpoints.SEND_NOTIFICATION_BY_TYPE, {
        type: notificationType,
      }),
      notificationInfo,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 201:
        return true;
      case 403:
        throw errorFactory.create(
          NotificationErr.SEND_NOTIFICATION_BY_TYPE_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(NotificationErr.NOTIFICATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(NotificationErr.SEND_NOTIFICATION_BY_TYPE_FAILED),
        );
    }
  }
};
