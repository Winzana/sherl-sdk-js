import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOpinion, IOpinionUpdateStatusInputDto } from '../types';
import { StringUtils } from '../../common/utils/string';
import { OpinionErr, errorFactory } from '../errors';

export const updateOpinion = async <T, K>(
  fetcher: Fetcher,
  id: string,
  updatedOpinion: IOpinionUpdateStatusInputDto,
): Promise<IOpinion<T, K>> => {
  try {
    const response = await fetcher.put<IOpinion<T, K>>(
      StringUtils.bindContext(endpoints.UPDATE_OPINION_STATUS, { id }),
      updatedOpinion,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OpinionErr.UPDATE_OPINION_FORBIDDEN);
      case 404:
        throw errorFactory.create(OpinionErr.UPDATE_OPINION_NOT_FOUND);
      default:
        throw errorFactory.create(OpinionErr.UPDATE_OPINION_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(OpinionErr.UPDATE_OPINION_FAILED);
  }
};
