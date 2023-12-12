import { ErrorFactory } from '../common/errors';

export enum AnalyticsErr {
  ANALYTICS_CA_FAILED = 'analytics/ca',
  ANALYTICS_CA_FAILED_FORBIDDEN = 'analytics/ca-forbidden',
  ANALYTICS_CA_NOT_FOUND = 'analytics/ca-not-found',
  ANALYTICS_AUDIENCES_FAILED = 'analytics/audiences',
  ANALYTICS_AUDIENCES_FAILED_FORBIDDEN = 'analytics/audiences-forbidden',
  ANALYTICS_AUDIENCES_NOT_FOUND = 'analytics/audiences-not-found',
  ANALYTICS_PRODUCTS_FAILED = 'analytics/products',
  ANALYTICS_PRODUCTS_FAILED_FORBIDDEN = 'analytics/products-forbidden',
  ANALYTICS_PRODUCTS_NOT_FOUND = 'analytics/products-not-found',
  ANALYTICS_FAILED = 'analytics/analytics',
  ANALYTICS_FAILED_FORBIDDEN = 'analytics/analytics-forbidden',
  ANALYTICS_NOT_FOUND = 'analytics/analytics-not-found',
  ANALYTICS_BI_FAILED = 'analytics/bi',
  ANALYTICS_BI_FAILED_FORBIDDEN = 'analytics/bi-forbidden',
  ANALYTICS_BI_NOT_FOUND = 'analytics/bi-not-found',
  ANALYTICS_NOTIFICATIONS_FAILED = 'analytics/notifications',
  ANALYTICS_NOTIFICATIONS_FAILED_FORBIDDEN = 'analytics/notifications-forbidden',
  ANALYTICS_NOTIFICATIONS_NOT_FOUND = 'analytics/notifications-not-found',
  ANALYTICS_TRACKING_FAILED = 'analytics/tracking',
  ANALYTICS_TRACKING_FAILED_FORBIDDEN = 'analytics/tracking-forbidden',
  ANALYTICS_TRACKING_NOT_FOUND = 'analytics/tracking-not-found',
}

export const errors = {
  [AnalyticsErr.ANALYTICS_CA_FAILED]: 'Failed to get sales figures analytics',
  [AnalyticsErr.ANALYTICS_CA_FAILED_FORBIDDEN]:
    'Failed to get sales figures analytics, forbidden',
  [AnalyticsErr.ANALYTICS_CA_NOT_FOUND]:
    'Failed to get sales figures analytics, not found',
  [AnalyticsErr.ANALYTICS_AUDIENCES_FAILED]:
    'Failed to get audiences analytics',
  [AnalyticsErr.ANALYTICS_AUDIENCES_FAILED_FORBIDDEN]:
    'Failed to get audiences analytics, forbidden',
  [AnalyticsErr.ANALYTICS_AUDIENCES_NOT_FOUND]:
    'Failed to get audiences analytics, not found',
  [AnalyticsErr.ANALYTICS_PRODUCTS_FAILED]: 'Failed to get products analytics',
  [AnalyticsErr.ANALYTICS_PRODUCTS_FAILED_FORBIDDEN]:
    'Failed to get products analytics, forbidden',
  [AnalyticsErr.ANALYTICS_PRODUCTS_NOT_FOUND]:
    'Failed to get products analytics, not found',
  [AnalyticsErr.ANALYTICS_FAILED]: 'Failed to send analytics',
  [AnalyticsErr.ANALYTICS_FAILED_FORBIDDEN]:
    'Failed to send analytics, forbidden',
  [AnalyticsErr.ANALYTICS_NOT_FOUND]: 'Failed to send analytics, not found',
  [AnalyticsErr.ANALYTICS_BI_FAILED]: 'Failed to send analytics',
  [AnalyticsErr.ANALYTICS_BI_FAILED_FORBIDDEN]:
    'Failed to send analytics, forbidden',
  [AnalyticsErr.ANALYTICS_BI_NOT_FOUND]: 'Failed to send analytics, not found',
  [AnalyticsErr.ANALYTICS_NOTIFICATIONS_FAILED]:
    'Failed to get notifications analytics',
  [AnalyticsErr.ANALYTICS_NOTIFICATIONS_FAILED_FORBIDDEN]:
    'Failed to get notifications analytics, forbidden',
  [AnalyticsErr.ANALYTICS_NOTIFICATIONS_NOT_FOUND]:
    'Failed to get notifications analytics, not found',
  [AnalyticsErr.ANALYTICS_TRACKING_FAILED]: 'Failed to get tracking analytics',
  [AnalyticsErr.ANALYTICS_TRACKING_FAILED_FORBIDDEN]:
    'Failed to get tracking analytics, forbidden',
  [AnalyticsErr.ANALYTICS_TRACKING_NOT_FOUND]:
    'Failed to get tracking analytics, not found',
};

export const errorFactory = new ErrorFactory<AnalyticsErr>('Analytics', errors);
