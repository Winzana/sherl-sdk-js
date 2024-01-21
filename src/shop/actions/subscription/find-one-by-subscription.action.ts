import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { endpoints } from '../../api/endpoints';
import {
  SubscriptionErr,
  errorFactory,
} from '../../errors/subscription/errors';
import {
  ISubscription,
  ISubscriptionFindOnByDto,
} from '../../types/subscription/entities';

/**
 * Retrieves a specific subscription based on provided filter criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ISubscriptionFindOnByDto} [filters] - Optional filters to apply when searching for a subscription.
 * @returns {Promise<ISubscription>} A promise that resolves to the subscription's information matching the filter criteria.
 */
export const getSubscriptionFindOneBy = async (
  fetcher: Fetcher,
  filters?: ISubscriptionFindOnByDto,
): Promise<ISubscription> => {
  try {
    const response = await fetcher.get<ISubscription>(
      endpoints.FIND_BY_SUBSCRIPTION,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          SubscriptionErr.FIND_ONE_SUBSCRIPTION_WITH_FILTER_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          SubscriptionErr.FIND_ONE_SUBSCRIPTION_WITH_FILTER_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(
        SubscriptionErr.FIND_ONE_SUBSCRIPTION_WITH_FILTER_FAILED,
      ),
    );
  }
};
