import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getAnalytics,
  getAudienceAnalytics,
  getBIAnalytics,
  getCAAnalytics,
  getNotificationsAnalytics,
  getProductsAnalytics,
} from './actions';
import { errorFactory } from './errors';

class AnalyticsProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  getAnalytics = this.withFetcher(getAnalytics);
  getCAAnalytics = this.withFetcher(getCAAnalytics);
  getNotificationsAnalytics = this.withFetcher(getNotificationsAnalytics);
  getAudiencesAnalytics = this.withFetcher(getAudienceAnalytics);
  getProductsAnalytics = this.withFetcher(getProductsAnalytics);
  getBIAnalytics = this.withFetcher(getBIAnalytics);
}

export { AnalyticsProvider };
