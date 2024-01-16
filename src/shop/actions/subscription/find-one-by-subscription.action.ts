import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(SubscriptionErr.FETCH_FAILED);
  }
};
