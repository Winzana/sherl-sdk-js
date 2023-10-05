import { Fetcher } from '../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(AnalyticsErr.ANALYTICS_PRODUCTS_FAILED);
  }
};
