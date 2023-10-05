import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(SubscriptionErr.FETCH_FAILED);
  }
};
