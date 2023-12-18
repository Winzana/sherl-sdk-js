import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          AnalyticsErr.ANALYTICS_TRACKING_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_TRACKING_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AnalyticsErr.ANALYTICS_TRACKING_FAILED),
    );
  }
};
