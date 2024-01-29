import { ErrorFactory } from '../common/errors';

export enum AnalyticsErr {
  ANALYTICS_NOT_FOUND = 'analytics/analytics-not-found',
  GET_ANALYTICS_FORBIDDEN = 'analytics/get-analytics-forbidden',
  GET_ANALYTICS_CA_FAILED = 'analytics/get-analytics-ca-failed',
  GET_ANALYTICS_CA_FORBIDDEN = 'analytics/get-analytics-ca-forbidden',
  GET_ANALYTICS_AUDIENCES_FAILED = 'analytics/get-analytics-audiences-failed',
  GET_ANALYTICS_AUDIENCES_FORBIDDEN = 'analytics/get-analytics-audiences-forbidden',
  GET_ANALYTICS_PRODUCTS_FAILED = 'analytics/get-analytics-products-failed',
  GET_ANALYTICS_PRODUCTS_FORBIDDEN = 'analytics/get-analytics-products-forbidden',
  GET_ANALYTICS_FAILED = 'analytics/get-analytics-failed',
  ANALYTICS_FAILED_FORBIDDEN = 'analytics/analytics-forbidden',
  GET_ANALYTICS_BI_FAILED = 'analytics/get-analytics-bi-failed',
  GET_ANALYTICS_BI_FORBIDDEN = 'analytics/get-analytics-bi-forbidden',
  GET_ANALYTICS_NOTIFICATIONS_FAILED = 'analytics/get-analytics-notifications-failed',
  GET_ANALYTICS_NOTIFICATIONS_FORBIDDEN = 'analytics/get-analytics-notifications-forbidden',
  GET_ANALYTICS_TRACKING_FAILED = 'analytics/get-analytics-tracking-failed',
  GET_ANALYTICS_TRACKING_FORBIDDEN = 'analytics/get-analytics-tracking-forbidden',
}

export const errors = {
  [AnalyticsErr.GET_ANALYTICS_CA_FAILED]:
    'Failed to get sales figures analytics',
  [AnalyticsErr.GET_ANALYTICS_CA_FORBIDDEN]:
    'Failed to get sales figures analytics, forbidden',
  [AnalyticsErr.GET_ANALYTICS_AUDIENCES_FAILED]:
    'Failed to get audiences analytics',
  [AnalyticsErr.GET_ANALYTICS_AUDIENCES_FORBIDDEN]:
    'Failed to get audiences analytics, forbidden',
  [AnalyticsErr.GET_ANALYTICS_PRODUCTS_FAILED]:
    'Failed to get products analytics',
  [AnalyticsErr.GET_ANALYTICS_PRODUCTS_FORBIDDEN]:
    'Failed to get products analytics, forbidden',
  [AnalyticsErr.GET_ANALYTICS_FAILED]: 'Failed to get analytics',
  [AnalyticsErr.ANALYTICS_FAILED_FORBIDDEN]:
    'Failed to send analytics, forbidden',
  [AnalyticsErr.ANALYTICS_NOT_FOUND]: 'Failed to get analytics, not found',
  [AnalyticsErr.GET_ANALYTICS_FORBIDDEN]: 'Failed to get analytics, forbidden',
  [AnalyticsErr.GET_ANALYTICS_BI_FAILED]: 'Failed to get analytics BI',
  [AnalyticsErr.GET_ANALYTICS_BI_FORBIDDEN]:
    'Failed to get analytics BI, forbidden',
  [AnalyticsErr.GET_ANALYTICS_NOTIFICATIONS_FAILED]:
    'Failed to get notifications analytics',
  [AnalyticsErr.GET_ANALYTICS_NOTIFICATIONS_FORBIDDEN]:
    'Failed to get notifications analytics, forbidden',
  [AnalyticsErr.GET_ANALYTICS_TRACKING_FAILED]:
    'Failed to get tracking analytics',
  [AnalyticsErr.GET_ANALYTICS_TRACKING_FORBIDDEN]:
    'Failed to get tracking analytics, forbidden',
};

export const errorFactory = new ErrorFactory<AnalyticsErr>('Analytics', errors);
