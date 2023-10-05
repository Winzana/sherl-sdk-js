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
    return response.data;
  } catch (err) {
    throw errorFactory.create(AnalyticsErr.ANALYTICS_BI_FAILED);
  }
};
