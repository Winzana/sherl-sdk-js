import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOpinion } from '../types';
import { Pagination } from '../../common/types/response';
import { OpinionErr, errorFactory } from '../errors';

export const getOpinionsIGive = async <T, K>(
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IOpinion<T, K>[]>> => {
  const response = await fetcher.get<Pagination<IOpinion<T, K>[]>>(
    endpoints.OPINION_I_GIVE,
    {
      page,
      itemsPerPage,
      ...filters,
    },
  );

  if (response.status !== 200) {
    errorFactory.create(OpinionErr.FETCH_FAILED);
  }

  return response.data;
};
