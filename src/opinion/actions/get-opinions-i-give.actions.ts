import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOpinion, IOpinionFilters } from '../types';
import { Pagination } from '../../common/types/response';
import { OpinionErr, errorFactory } from '../errors';

export const getOpinionsIGive = async <T, K>(
  fetcher: Fetcher,
  filters: IOpinionFilters,
): Promise<Pagination<IOpinion<T, K>>> => {
  const response = await fetcher.get<Pagination<IOpinion<T, K>>>(
    endpoints.OPINION_I_GIVE,
    filters,
  );

  if (response.status !== 200) {
    errorFactory.create(OpinionErr.FETCH_FAILED);
  }

  return response.data;
};
