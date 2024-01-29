import { SherlError } from '../../../common';
import { Pagination } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          AdvertisementErr.GET_PUBLIC_ADVERTISEMENTS_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(
            AdvertisementErr.GET_PUBLIC_ADVERTISEMENTS_FAILED,
          ),
        );
    }
  }
};
