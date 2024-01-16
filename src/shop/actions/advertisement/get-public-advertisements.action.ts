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

export const getPublicAdvertisements = async (
  fetcher: Fetcher,
  filters?: IFindAdvertisementInputDto,
): Promise<Pagination<IAvertisement>> => {
  try {
    const response = await fetcher.get<Pagination<IAvertisement>>(
      endpoints.GET_PUBLIC_ADVERTISEMENTS,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          AdvertisementErr.GET_PUBLIC_ADVERTISEMENTS_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          AdvertisementErr.GET_PUBLIC_ADVERTISEMENTS_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(AdvertisementErr.GET_PUBLIC_ADVERTISEMENTS_FAILED),
    );
  }
};
