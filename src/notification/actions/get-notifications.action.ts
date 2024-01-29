import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { INotification } from '../types';
import { INotificationFilters } from '../types';
import { errorFactory, NotificationErr } from '../errors';
import { ISearchResult } from '../../common';
import { getSherlError } from '../../common/utils';

/**
 * Get a list of notifications based on specified filters.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {INotificationFilters} filters - Filters to apply when fetching notifications.
 * @returns {Promise<ISearchResult<INotification>>} A promise that resolves to an ISearchResult containing the list of notifications.
 */
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
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(NotificationErr.GET_NOTIFICATIONS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(NotificationErr.GET_NOTIFICATIONS_FAILED),
        );
    }
  }
};
