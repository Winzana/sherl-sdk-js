import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICreateAdvertisementInputDto} advertisement - The details of the advertisement to be created.
 * @returns {Promise<IAvertisement>} A promise that resolves to the information of the newly created advertisement.
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(AdvertisementErr.CREATION_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(AdvertisementErr.CREATION_FAILED),
        );
    }
  }
};
