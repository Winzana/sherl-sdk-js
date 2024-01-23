import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOpinion, IOpinionFilters } from '../types';
import { Pagination } from '../../common/types/response';
import { OpinionErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Get opinions given by a user based on provided filters.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IOpinionFilters} filters - Filters to apply to the request.
 * @returns {Promise<Pagination<IOpinion<T, K>>>} A promise that resolves with paginated opinion data.
 */
export const getOpinionsIGive = async <T, K>(
  fetcher: Fetcher,
  filters: IOpinionFilters,
): Promise<Pagination<IOpinion<T, K>>> => {
  try {
    const response = await fetcher.get<Pagination<IOpinion<T, K>>>(
      endpoints.OPINION_I_GIVE,
      filters,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OpinionErr.FETCH_OPINION_I_GIVE_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OpinionErr.FETCH_OPINION_AVERAGE_FAILED),
        );
    }
  }
};
