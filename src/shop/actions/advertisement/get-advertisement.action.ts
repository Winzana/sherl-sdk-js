import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import {
  AdvertisementErr,
  errorFactory,
} from '../../errors/advertisement/errors';
import { IAvertisement } from '../../types/advertisement/entities';

/**
 * Retrieves a specific advertisement by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} advertisementId - The unique identifier of the advertisement to be retrieved.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the specified advertisement.
 */
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.NOT_FOUND);
  }
};
