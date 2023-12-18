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
 * This function sends a PATCH request to update a specific advertisement identified by its unique ID.
 * The updated advertisement details are provided in a Partial<ICreateAdvertisementInputDto> object. On successful update,
 * it returns the updated advertisement's information encapsulated in an IAvertisement object. If the update process
 * encounters any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating
 * the failure of the advertisement update is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} advertisementId - The unique identifier of the advertisement to be updated.
 * @param {Partial<ICreateAdvertisementInputDto>} updatedAdvertisement - The partial data of the advertisement to be updated.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the updated advertisement.
 * @throws {AdvertisementErr.UPDATE_FAILED} Throws an error if the advertisement update fails.
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(AdvertisementErr.UPDATE_FAILED);
  }
};
