import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticsFindByInputDto, ITrace } from '../types';

/**
 * Get tracking analytics data.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IAnalyticsFindByInputDto} filters - Filters for the tracking analytics data (optional).
 * @returns {Promise<ISearchResult<ITrace>>} A promise that resolves to an ISearchResult containing tracking analytics data.
 */
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
