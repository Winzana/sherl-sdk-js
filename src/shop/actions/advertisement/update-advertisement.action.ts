import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.UPDATE_FAILED);
  }
};
