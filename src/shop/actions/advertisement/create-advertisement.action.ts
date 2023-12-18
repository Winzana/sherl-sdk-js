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

/**
 * Creates a new advertisement with the provided details.
 *
 * This function sends a POST request to create a new advertisement. The advertisement details are provided in the
 * ICreateAdvertisementInputDto object. On successful creation, it returns the newly created advertisement's
 * information encapsulated in an IAvertisement object. If the advertisement creation process encounters any errors,
 * a specific error indicating the failure of the advertisement creation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICreateAdvertisementInputDto} advertisement - The details of the advertisement to be created.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the newly created advertisement.
 * @throws {AdvertisementErr.CREATION_FAILED} Throws an error if the advertisement creation fails.
 */

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
