import { Fetcher } from '../../../common/api';
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

    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.CREATION_FAILED);
  }
};
