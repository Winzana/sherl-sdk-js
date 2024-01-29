import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import {
  SubscriptionErr,
  errorFactory,
} from '../../errors/subscription/errors';
import { ISubscription } from '../../types/subscription/entities';

/**
 * Cancels a specific subscription identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} subscriptionId - The unique identifier of the subscription to be canceled.
 * @returns {Promise<ISubscription>} A promise that resolves to the subscription's information after cancellation.
 */
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          SubscriptionErr.CANCEL_SUBSCRIPTION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(SubscriptionErr.SUBSCRIPTION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(SubscriptionErr.CANCEL_SUBSCRIPTION_FAILED),
        );
    }
  }
};
