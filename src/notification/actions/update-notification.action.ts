import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateDto } from '../types';

export const updateNotification = async (
  fetcher: Fetcher,
  id: string,
  body: INotificationUpdateDto,
): Promise<INotification> => {
  try {
    const response = await fetcher.put<INotification>(
      StringUtils.bindContext(endpoints.UPDATE_NOTIFICATION, { id }),
      body,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          NotificationErr.UPDATE_NOTIFICATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(NotificationErr.NOTIFICATION_NOT_FOUND);
      default:
        throw errorFactory.create(NotificationErr.UPDATE_FAILED);
    }

    return response.data;
  } catch (error) {
    const sherlError = getSherlError(
      error,
      errorFactory.create(NotificationErr.UPDATE_FAILED),
    );
    throw sherlError;
  }
};
