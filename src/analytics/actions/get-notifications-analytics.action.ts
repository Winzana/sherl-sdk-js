import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, INotificationsAnalyticsInputDto } from '../types';

/**
 * Get analytics data related to notifications.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {INotificationsAnalyticsInputDto} filters - Filters for the notifications analytics data (optional).
 * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of analytics data.
 */
export const getNotificationsAnalytics = async (
  fetcher: Fetcher,
  filters?: INotificationsAnalyticsInputDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS_NOTIFICATIONS,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          AnalyticsErr.ANALYTICS_NOTIFICATIONS_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_NOTIFICATIONS_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AnalyticsErr.ANALYTICS_NOTIFICATIONS_FAILED),
    );
  }
};
