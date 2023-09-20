import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OpinionErr, errorFactory } from '../errors';
import { IAverage } from '../types';

export const getOpinionsAverage = async (
  fetcher: Fetcher,
  opinionToUri: string,
): Promise<IAverage> => {
  const response = await fetcher.get<IAverage>(endpoints.GET_OPINIONS_AVERAGE, {
    opinionToUri,
  });

  if (response.status !== 200) {
    errorFactory.create(OpinionErr.FETCH_OPINION_AVERAGE_FAILED);
  }
  return response.data;
};
