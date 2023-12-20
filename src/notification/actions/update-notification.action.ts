import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateDto } from '../types';

/**
 * Update a notification.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The ID of the notification to update.
 * @param {INotificationUpdateDto} body - The update body containing the changes to apply.
 * @returns {Promise<INotification>} A promise that resolves to the updated notification.
 */
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
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(NotificationErr.UPDATE_FAILED),
    );
  }
};
