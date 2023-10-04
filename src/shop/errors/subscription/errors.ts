import { ErrorFactory } from '../../../common/errors';

export enum SubscriptionErr {
  FETCH_FAILED = 'subscription/fetch-failed',
  CANCEL_SUBSCRIPTION_FAILED = 'subscription/cancel-failed',
}

export const errors = {
  [SubscriptionErr.FETCH_FAILED]: 'Failed to fetch subscription',
  [SubscriptionErr.CANCEL_SUBSCRIPTION_FAILED]: 'Failed to cancel subscription',
};

export const errorFactory = new ErrorFactory<SubscriptionErr>(
  'Shop/Subscription',
  errors,
);
