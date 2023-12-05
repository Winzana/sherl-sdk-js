import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPositionInputDto } from '../types';
import { ILocation, Pagination } from '../../common';

/**
 * Retrieves the current address based on a given position.
 *
 * This function sends a GET request with the provided position details to fetch the current address.
 * The position is specified using the IPositionInputDto object. The function returns a paginated response
 * containing location data. If the request fails, an error is thrown with the status code of the failed request.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPositionInputDto} position - The position data used to determine the current address.
 * @returns {Promise<Pagination<ILocation>>} A promise that resolves to a paginated response containing the location data.
 * @throws {Error} Throws an error if the API request fails, including the status code of the failure.
 */

export const getCurrentAddress = async (
  fetcher: Fetcher,
  position: IPositionInputDto,
): Promise<Pagination<ILocation>> => {
  const response = await fetcher.get<Pagination<ILocation>>(
    endpoints.GET_POSITION,
    position,
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
