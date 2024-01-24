import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ICreateOpinionInput, IOpinion } from '../types';
import { StringUtils } from '../../common/utils/string';
import { OpinionErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Create an opinion.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICreateOpinionInput} opinion - The input data for creating the opinion.
 * @returns {Promise<IOpinion<T, K>>} A promise that resolves with the created opinion data.
 */
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OpinionErr.CREATE_OPINION_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OpinionErr.CREATE_OPINION_FAILED),
        );
    }
  }
};
