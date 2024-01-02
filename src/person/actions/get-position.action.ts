import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPositionInputDto } from '../types';
import { ILocation, Pagination } from '../../common';
import { PersonErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Retrieves the current address based on a given position.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPositionInputDto} position - The position data used to determine the current address.
 * @returns {Promise<Pagination<ILocation>>} A promise that resolves to a paginated response containing the location data.
 */
export const getCurrentAddress = async (
  fetcher: Fetcher,
  position: IPositionInputDto,
): Promise<Pagination<ILocation>> => {
  try {
    const response = await fetcher.get<Pagination<ILocation>>(
      endpoints.GET_POSITION,
      position,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.FETCH_POSITION_FORBIDDEN);
      default:
        throw errorFactory.create(PersonErr.FETCH_POSITION_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.FETCH_POSITION_FAILED),
    );
  }
};
