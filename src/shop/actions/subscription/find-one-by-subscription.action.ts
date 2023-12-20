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
          SubscriptionErr.FIND_ONE_SUBSCRIPTION_WITH_FILTER_FAILED_FORBIDDEN,
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
