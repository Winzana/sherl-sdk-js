import { ErrorFactory } from '../../../common/errors';

export enum SubscriptionErr {
  FIND_ONE_SUBSCRIPTION_WITH_FILTER_FAILED = 'subscription/fetch-failed',
  FIND_ONE_SUBSCRIPTION_WITH_FILTER_FORBIDDEN = 'subscription/fetch-forbidden',
  CANCEL_SUBSCRIPTION_FAILED = 'subscription/cancel-failed',
  CANCEL_SUBSCRIPTION_FORBIDDEN = 'subscription/cancel-forbidden',
  SUBSCRIPTION_NOT_FOUND = 'subscription/not-found',
}

export const errors = {
  [SubscriptionErr.FIND_ONE_SUBSCRIPTION_WITH_FILTER_FAILED]:
    'Failed to fetch subscription',
  [SubscriptionErr.FIND_ONE_SUBSCRIPTION_WITH_FILTER_FORBIDDEN]:
    'Failed to fetch subscription, forbidden',
  [SubscriptionErr.CANCEL_SUBSCRIPTION_FAILED]: 'Failed to cancel subscription',
  [SubscriptionErr.CANCEL_SUBSCRIPTION_FORBIDDEN]:
    'Failed to cancel subscription, forbidden',
  [SubscriptionErr.SUBSCRIPTION_NOT_FOUND]: 'Subscription not found',
};

export const errorFactory = new ErrorFactory<SubscriptionErr>(
  'Shop/Subscription',
  errors,
);
