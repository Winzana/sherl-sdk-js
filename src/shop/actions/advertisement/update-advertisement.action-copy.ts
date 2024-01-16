import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import {
  AdvertisementErr,
  errorFactory,
} from '../../errors/advertisement/errors';
import {
  IAvertisement,
  ICreateAdvertisementInputDto,
} from '../../types/advertisement/entities';

export const updateAdvertisement = async (
  fetcher: Fetcher,
  advertisementId: string,
  updatedAdvertisement: Partial<ICreateAdvertisementInputDto>,
): Promise<IAvertisement> => {
  try {
    const response = await fetcher.patch<IAvertisement>(
      StringUtils.bindContext(endpoints.ADVERTISEMENT, {
        id: advertisementId,
      }),
      updatedAdvertisement,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(AdvertisementErr.UPDATE_FORBIDDEN);
      case 404:
        throw errorFactory.create(AdvertisementErr.ADVERTISEMENT_NOT_FOUND);
      default:
        throw errorFactory.create(AdvertisementErr.UPDATE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(AdvertisementErr.UPDATE_FAILED),
    );
  }
};
