import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import {
  SubscriptionErr,
  errorFactory,
} from '../../errors/subscription/errors';
import { ISubscription } from '../../types/subscription/entities';

export const cancelSubscription = async (
  fetcher: Fetcher,
  subscriptionId: string,
): Promise<ISubscription> => {
  try {
    const response = await fetcher.post<ISubscription>(
      StringUtils.bindContext(endpoints.CANCEL_SUBSCRIPTION, {
        id: subscriptionId,
      }),
      {},
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          SubscriptionErr.CANCEL_SUBSCRIPTION_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(SubscriptionErr.SUBSCRIPTION_NOT_FOUND);
      default:
        throw errorFactory.create(SubscriptionErr.CANCEL_SUBSCRIPTION_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(SubscriptionErr.CANCEL_SUBSCRIPTION_FAILED),
    );
  }
};
