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
