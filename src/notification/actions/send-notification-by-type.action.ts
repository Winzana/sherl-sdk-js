import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { NotificationTypeEnum, SendNotificationInput } from '../types';

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
    switch (response.status) {
      case 201:
        return true;
      case 403:
        throw errorFactory.create(
          NotificationErr.SEND_NOTIFICATION_BY_TYPE_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(NotificationErr.NOTIFICATION_NOT_FOUND);
      default:
        throw errorFactory.create(
          NotificationErr.SEND_NOTIFICATION_BY_TYPE_FAILED,
        );
    }
  } catch (error) {
    const sherlError = getSherlError(
      error,
      errorFactory.create(NotificationErr.SEND_NOTIFICATION_BY_TYPE_FAILED),
    );
    throw sherlError;
  }
};
