import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { OpinionErr, errorFactory } from '../errors';
import { IAverage } from '../types';

/**
 * Get the average opinion data for a given resource.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} opinionToUri - The URI of the resource for which to fetch the average opinions.
 * @returns {Promise<IAverage>} A promise that resolves with the average opinion data.
 */
export const getOpinionsAverage = async (
  fetcher: Fetcher,
  opinionToUri: string,
): Promise<IAverage> => {
  try {
    const response = await fetcher.get<IAverage>(
      endpoints.GET_OPINIONS_AVERAGE,
      { opinionToUri },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OpinionErr.FETCH_OPINION_AVERAGE_FORBIDDEN);
      default:
        throw errorFactory.create(OpinionErr.FETCH_OPINION_AVERAGE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OpinionErr.FETCH_OPINION_AVERAGE_FAILED),
    );
  }
};
