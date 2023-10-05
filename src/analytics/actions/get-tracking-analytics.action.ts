import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticsFindByInputDto, ITrace } from '../types';

export const getTrackingAnalytics = async (
  fetcher: Fetcher,
  filters?: IAnalyticsFindByInputDto,
): Promise<ISearchResult<ITrace>> => {
  try {
    const response = await fetcher.get<ISearchResult<ITrace>>(
      endpoints.ANALYTICS_TRACKING,
      filters,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(AnalyticsErr.ANALYTICS_TRACKING_FAILED);
  }
};
