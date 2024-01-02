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
 * Retrieves a paginated list of public advertisements based on provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IFindAdvertisementInputDto} [filters] - Optional filters to apply when fetching public advertisements.
 * @returns {Promise<Pagination<IAvertisement>>} A promise that resolves to a paginated response containing the list of public advertisements.
 */
export const getPublicAdvertisements = async (
  fetcher: Fetcher,
  filters?: IFindAdvertisementInputDto,
): Promise<Pagination<IAvertisement>> => {
  try {
    const response = await fetcher.get<Pagination<IAvertisement>>(
      endpoints.GET_PUBLIC_ADVERTISEMENTS,
      filters,
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.FETCH_FAILED);
  }
};
