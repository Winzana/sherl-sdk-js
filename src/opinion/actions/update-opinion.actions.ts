import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOpinion } from '../types';
import { StringUtils } from '../../common/utils/string';
import { OpinionErr, errorFactory } from '../errors';

export const updateOpinion = async <T, K>(
  fetcher: Fetcher,
  id: string,
  opinion: Partial<IOpinion<T, K>>,
): Promise<IOpinion<T, K>> => {
  const response = await fetcher.put<IOpinion<T, K>>(
    StringUtils.bindContext(endpoints.UPDATE_OPINION_STATUS, { id }),
    opinion,
  );

  if (response.status !== 200) {
    errorFactory.create(OpinionErr.UPDATE_OPINION_FAILED);
  }

  return response.data;
};
