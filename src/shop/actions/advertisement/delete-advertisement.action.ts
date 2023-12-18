import { Fetcher } from '../../../common/api';
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
 * This function sends a DELETE request to remove an advertisement. It uses the advertisement's unique ID
 * to construct the endpoint for the request. On successful deletion, it returns the information of the deleted
 * advertisement encapsulated in an IAvertisement object. If the deletion process encounters any errors, such as
 * a failure to connect to the endpoint or other issues, a specific error indicating the failure of the advertisement
 * deletion is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} advertisementId - The unique identifier of the advertisement to be deleted.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the deleted advertisement.
 * @throws {AdvertisementErr.DELETE_FAILED} Throws an error if the advertisement deletion fails.
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.DELETE_FAILED);
  }
};
