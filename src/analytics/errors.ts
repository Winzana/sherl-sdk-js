import { ErrorFactory } from '../common/errors';

export enum AnalyticsErr {
  ANALYTICS_CA_FAILED = 'analytics/ca',
  ANALYTICS_AUDIENCES_FAILED = 'analytics/audiences',
  ANALYTICS_PRODUCTS_FAILED = 'analytics/products',
  ANALYTICS_FAILED = 'analytics/analytics',
  ANALYTICS_BI_FAILED = 'analytics/bi',
  ANALYTICS_NOTIFICATIONS_FAILED = 'analytics/notifications',
  ANALYTICS_TRACKING_FAILED = 'analytics/tracking',
}

export const errors = {
  [AnalyticsErr.ANALYTICS_CA_FAILED]: 'Failed to get ca analytics',
  [AnalyticsErr.ANALYTICS_AUDIENCES_FAILED]:
    'Failed to get audiences analytics',
  [AnalyticsErr.ANALYTICS_PRODUCTS_FAILED]: 'Failed to get products analytics',
  [AnalyticsErr.ANALYTICS_FAILED]: 'Failed to send analytics',
  [AnalyticsErr.ANALYTICS_BI_FAILED]: 'Failed to send analytics',
  [AnalyticsErr.ANALYTICS_NOTIFICATIONS_FAILED]:
    'Failed to get notifications analytics',
  [AnalyticsErr.ANALYTICS_TRACKING_FAILED]: 'Failed to get tracking analytics',
};

export const errorFactory = new ErrorFactory<AnalyticsErr>('Analytics', errors);
