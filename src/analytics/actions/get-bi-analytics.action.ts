import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticsFindBIInputDto } from '../types';

export const getBIAnalytics = async (
  fetcher: Fetcher,
  filters?: IAnalyticsFindBIInputDto,
): Promise<any> => {
  try {
    const response = await fetcher.get<any>(endpoints.ANALYTICS_BI, filters);

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_BI_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_BI_NOT_FOUND);
      default:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_BI_FAILED);
    }
  } catch (err) {
    throw errorFactory.create(AnalyticsErr.ANALYTICS_BI_FAILED);
  }
};
