import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { INotification } from '../types';
import { INotificationFilters } from '../types';
import { Pagination } from '../../common/types/response';
import { errorFactory, NotificationErr } from '../errors';

export const getNotifications = async (
  fetcher: Fetcher,
  filters: INotificationFilters,
): Promise<Pagination<INotification[]>> => {
  const response = await fetcher
    .get<Pagination<INotification[]>>(endpoints.GET_NOTIFICATIONS, {
      ...filters,
    })
    .catch((_err) => {
      throw errorFactory.create(NotificationErr.FETCH_FAILED);
    });

  if (response.status !== 200) {
    throw errorFactory.create(NotificationErr.NOT_FOUND);
  }

  return response.data;
};
