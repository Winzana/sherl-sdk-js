import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { INotification } from '../types';
import { INotificationFilters } from '../types';
import { errorFactory, NotificationErr } from '../errors';
import { ISearchResult } from '../../common';

export const getNotifications = async (
  fetcher: Fetcher,
  filters: INotificationFilters,
): Promise<ISearchResult<INotification>> => {
  try {
    const response = await fetcher.get<ISearchResult<INotification>>(
      endpoints.GET_NOTIFICATIONS,
      {
        ...filters,
      },
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(NotificationErr.GET_NOTIFICATIONS_FORBIDDEN);
      case 404:
        throw errorFactory.create(NotificationErr.GET_NOTIFICATIONS_NOT_EXIST);
      default:
        throw errorFactory.create(NotificationErr.FETCH_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(NotificationErr.FETCH_FAILED);
  }
};
