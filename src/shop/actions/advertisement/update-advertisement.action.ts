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

/**
 * Updates an existing advertisement with the provided details.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} advertisementId - The unique identifier of the advertisement to be updated.
 * @param {Partial<ICreateAdvertisementInputDto>} updatedAdvertisement - The partial data of the advertisement to be updated.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the updated advertisement.
 */
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
        throw errorFactory.create(AdvertisementErr.UPDATE_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(AdvertisementErr.ADVERTISEMENT_NOT_FOUND);
      default:
        throw errorFactory.create(AdvertisementErr.UPDATE_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.UPDATE_FAILED);
  }
};
