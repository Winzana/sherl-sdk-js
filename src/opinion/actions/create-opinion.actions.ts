import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ICreateOpinionInput, IOpinion } from '../types';
import { StringUtils } from '../../common/utils/string';
import { OpinionErr, errorFactory } from '../errors';

export const createOpinion = async <T, K>(
  fetcher: Fetcher,
  opinion: ICreateOpinionInput,
): Promise<IOpinion<T, K>> => {
  try {
    const { id, ...rest } = opinion;
    const response = await fetcher.post<IOpinion<T, K>>(
      StringUtils.bindContext(endpoints.CREATE_OPINION, { id }),
      rest,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OpinionErr.CREATE_OPINION_FORBIDDEN);
      case 409:
        throw errorFactory.create(OpinionErr.CREATE_OPINION_ALREADY_EXIST);
      default:
        throw errorFactory.create(OpinionErr.CREATE_OPINION_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(OpinionErr.CREATE_OPINION_FAILED);
  }
};
