import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import {
  AdvertisementErr,
  errorFactory,
} from '../../errors/advertisement/errors';
import { getSherlError } from '../../../common/utils/errors';
import { IAvertisement } from '../../types/advertisement/entities';

export const getAdvertisementById = async (
  fetcher: Fetcher,
  advertisementId: string,
): Promise<IAvertisement> => {
  try {
    const response = await fetcher.get<IAvertisement>(
      StringUtils.bindContext(endpoints.ADVERTISEMENT, {
        id: advertisementId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          AdvertisementErr.GET_ADVERTISEMENT_BY_ID_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(AdvertisementErr.ADVERTISEMENT_NOT_FOUND);
      default:
        throw errorFactory.create(
          AdvertisementErr.GET_ADVERTISEMENT_BY_ID_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(AdvertisementErr.GET_ADVERTISEMENT_BY_ID_FAILED),
    );
  }
};
