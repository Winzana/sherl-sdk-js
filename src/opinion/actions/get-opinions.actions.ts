import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOpinion, IOpinionFilters } from '../types';
import { Pagination } from '../../common/types/response';
import { OpinionErr, errorFactory } from '../errors';

export const getOpinions = async <T, K>(
  fetcher: Fetcher,
  filters: IOpinionFilters,
): Promise<Pagination<IOpinion<T, K>>> => {
  try {
    const response = await fetcher.get<Pagination<IOpinion<T, K>>>(
      endpoints.GET_OPINIONS,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OpinionErr.FETCH_OPINIONS_FORBIDDEN);
      case 404:
        throw errorFactory.create(OpinionErr.FETCH_OPINIONS_NOT_FOUND);
      default:
        throw errorFactory.create(OpinionErr.FETCH_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(OpinionErr.FETCH_FAILED);
  }
};
