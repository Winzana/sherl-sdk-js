import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { AnalyticsErr, errorFactory } from '../errors';
import { IAnalyticResponse, IProductAnalyticsInputDto } from '../types';

export const getProductsAnalytics = async (
  fetcher: Fetcher,
  filters?: IProductAnalyticsInputDto,
): Promise<IAnalyticResponse[]> => {
  try {
    const response = await fetcher.get<IAnalyticResponse[]>(
      endpoints.ANALYTICS_PRODUCTS,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          AnalyticsErr.ANALYTICS_PRODUCTS_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(AnalyticsErr.ANALYTICS_PRODUCTS_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AnalyticsErr.ANALYTICS_PRODUCTS_FAILED),
    );
  }
};
