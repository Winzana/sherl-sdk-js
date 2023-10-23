import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { NotificationErr, errorFactory } from '../errors';
import { INotification, INotificationUpdateDto } from '../types';

export const updateNotification = async (
  fetcher: Fetcher,
  id: string,
  body: INotificationUpdateDto,
): Promise<INotification> => {
  const response = await fetcher
    .put<INotification>(
      StringUtils.bindContext(endpoints.UPDATE_NOTIFICATION, { id }),
      body,
    )
    .catch((_err) => {
      throw errorFactory.create(NotificationErr.UPDATE_FAILED);
    });
  if (response.status >= 300) {
    throw errorFactory.create(NotificationErr.UPDATE_FAILED);
  }

  return response.data;
};
