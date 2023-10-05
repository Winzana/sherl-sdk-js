import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, INotificationsAnalyticsInputDto } from '../types';

export const getNotificationsAnalytics = async (
  fetcher: Fetcher,
  filters?: INotificationsAnalyticsInputDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS_NOTIFICATIONS,
      filters,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(AnalyticsErr.ANALYTICS_NOTIFICATIONS_FAILED);
  }
};
