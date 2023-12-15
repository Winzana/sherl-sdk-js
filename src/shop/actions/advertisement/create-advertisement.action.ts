import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { endpoints } from '../../api/endpoints';
import {
  AdvertisementErr,
  errorFactory,
} from '../../errors/advertisement/errors';
import {
  IAvertisement,
  ICreateAdvertisementInputDto,
} from '../../types/advertisement/entities';

export const createAdvertisement = async (
  fetcher: Fetcher,
  advertisement: ICreateAdvertisementInputDto,
): Promise<IAvertisement> => {
  try {
    const response = await fetcher.post<IAvertisement>(
      endpoints.CREATE_ADVERTISEMENT,
      advertisement,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(AdvertisementErr.CREATION_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(AdvertisementErr.CREATION_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(AdvertisementErr.CREATION_FAILED),
    );
  }
};
