import { Pagination } from '../../../common';
import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import {
  AdvertisementErr,
  errorFactory,
} from '../../errors/advertisement/errors';
import {
  IAvertisement,
  IFindAdvertisementInputDto,
} from '../../types/advertisement/entities';

/**
 * Retrieves a paginated list of advertisements based on provided filters.
 *
 * This function sends a GET request to fetch a list of advertisements, allowing for filtering based on various criteria.
 * The filters are specified through the IFindAdvertisementInputDto object. It returns a paginated response containing
 * a list of advertisements, each encapsulated in an IAvertisement object. If the request fails, it throws an error
 * with a specific code indicating the failure in fetching the advertisements.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IFindAdvertisementInputDto} [filters] - Optional filters to apply when fetching advertisements.
 * @returns {Promise<Pagination<IAvertisement>>} A promise that resolves to a paginated response containing the list of advertisements.
 * @throws {AdvertisementErr.FETCH_FAILED} Throws an error if the fetching of advertisements fails.
 */
export const getAdvertisements = async (
  fetcher: Fetcher,
  filters?: IFindAdvertisementInputDto,
): Promise<Pagination<IAvertisement>> => {
  try {
    const response = await fetcher.get<Pagination<IAvertisement>>(
      endpoints.GET_ADVERTISEMENTS,
      filters,
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.FETCH_FAILED);
  }
};
