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
 * This function sends a GET request to fetch details of an advertisement using its unique identifier.
 * The advertisement ID is used to construct the endpoint for the GET request. If the advertisement is
 * found successfully, it returns the advertisement's information encapsulated in an IAvertisement object.
 * In case of any errors, such as a failure to find the advertisement or connectivity issues, a specific error
 * indicating the failure to find the advertisement is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} advertisementId - The unique identifier of the advertisement to be retrieved.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the specified advertisement.
 * @throws {AdvertisementErr.NOT_FOUND} Throws an error if the advertisement is not found.
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
