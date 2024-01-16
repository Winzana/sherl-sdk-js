import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  getAnalytics,
  getAudienceAnalytics,
  getBIAnalytics,
  getCAAnalytics,
  getNotificationsAnalytics,
  getProductsAnalytics,
  getTrackingAnalytics,
} from './actions';
import { errorFactory } from './errors';

class AnalyticsProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Get analytics data.
   *
   * @param {IAnalyticsInputDto} filters - Optional filters for the analytics data.
   * @returns {Promise<ITrace>} A promise that resolves to the analytics data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/analytics#get-analytics Sherl SDK documentation} for further information
   */
  getAnalytics = this.withFetcher(getAnalytics);

  /**
   * Get Customer Analytics (CA) data.
   *
   * @param {ICAAnalyticsInputDto} filters - Filters for the CA analytics data (optional).
   * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of CA analytics data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/analytics#get-ca-analytics Sherl SDK documentation} for further information
   */
  getCAAnalytics = this.withFetcher(getCAAnalytics);

  /**
   * Get analytics data related to notifications.
   *
   * @param {INotificationsAnalyticsInputDto} filters - Filters for the notifications analytics data (optional).
   * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of analytics data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/analytics#get-notifications-analytics Sherl SDK documentation} for further information
   */
  getNotificationsAnalytics = this.withFetcher(getNotificationsAnalytics);

  /**
   * Get audience analytics data.
   *
   * @param {IAnalyticsInputBaseDto} filters - Optional filters for the audience analytics data.
   * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of audience analytics data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/analytics#get-audiences-analytics Sherl SDK documentation} for further information
   */
  getAudiencesAnalytics = this.withFetcher(getAudienceAnalytics);

  /**
   * Get analytics data related to products.
   *
   * @param {IProductAnalyticsInputDto} filters - Filters for the product analytics data (optional).
   * @returns {Promise<IAnalyticResponse[]>} A promise that resolves to an array of analytics data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/analytics#get-products-analytics Sherl SDK documentation} for further information
   */
  getProductsAnalytics = this.withFetcher(getProductsAnalytics);

  /**
   * Get Business Intelligence (BI) analytics data.
   *
   * @param {IAnalyticsFindBIInputDto} filters - Filters for the BI analytics data.
   * @returns {Promise<any>} A promise that resolves to the BI analytics data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/analytics#get-bi-analytics Sherl SDK documentation} for further information
   */
  getBIAnalytics = this.withFetcher(getBIAnalytics);

  /**
   * Get tracking analytics data.
   *
   * @param {IAnalyticsFindByInputDto} filters - Filters for the tracking analytics data (optional).
   * @returns {Promise<ISearchResult<ITrace>>} A promise that resolves to an ISearchResult containing tracking analytics data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/analytics#get-tracking-analytics Sherl SDK documentation} for further information
   */
  getTrackingAnalytics = this.withFetcher(getTrackingAnalytics);
}

export { AnalyticsProvider };
