import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, ICAAnalyticsInputDto } from '../types';

/**
 * Get Customer Analytics (CA) data.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICAAnalyticsInputDto} filters - Filters for the CA analytics data (optional).
 * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of CA analytics data.
 */
export const getCAAnalytics = async (
  fetcher: Fetcher,
  filters?: ICAAnalyticsInputDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS_CA,
      filters,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(AnalyticsErr.GET_ANALYTICS_CA_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(AnalyticsErr.GET_ANALYTICS_CA_FAILED),
        );
    }
  }
};
