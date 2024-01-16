import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import {
  AdvertisementErr,
  errorFactory,
} from '../../errors/advertisement/errors';
import { IAvertisement } from '../../types/advertisement/entities';

/**
 * Deletes a specific advertisement identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} advertisementId - The unique identifier of the advertisement to be deleted.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the deleted advertisement.
 */
export const deleteAdvertisement = async (
  fetcher: Fetcher,
  advertisementId: string,
): Promise<IAvertisement> => {
  try {
    const response = await fetcher.delete<IAvertisement>(
      StringUtils.bindContext(endpoints.ADVERTISEMENT, {
        id: advertisementId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(AdvertisementErr.DELETE_FORBIDDEN);
      case 404:
        throw errorFactory.create(AdvertisementErr.ADVERTISEMENT_NOT_FOUND);
      default:
        throw errorFactory.create(AdvertisementErr.DELETE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(AdvertisementErr.DELETE_FAILED),
    );
  }
};
