import { Fetcher } from '../../common/api';
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

    if (response.status !== 201) {
      throw errorFactory.create(
        NotificationErr.SEND_NOTIFICATION_BY_TYPE_FAILED,
      );
    }

    return true;
  } catch (err) {
    throw errorFactory.create(NotificationErr.SEND_NOTIFICATION_BY_TYPE_FAILED);
  }
};
