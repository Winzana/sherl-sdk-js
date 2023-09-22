import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ICreateOpinionInput, IOpinion } from '../types';
import { StringUtils } from '../../common/utils/string';
import { OpinionErr, errorFactory } from '../errors';

export const createOpinion = async <T, K>(
  fetcher: Fetcher,
  opinion: ICreateOpinionInput,
): Promise<IOpinion<T, K>> => {
  const { id, ...rest } = opinion;
  const response = await fetcher.post<IOpinion<T, K>>(
    StringUtils.bindContext(endpoints.CREATE_OPINION, { id }),
    rest,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OpinionErr.CREATE_OPINION_FAILED);
  }

  return response.data;
};
