import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPictureRegister } from '../types';
import { StringUtils } from '../../common/utils/string';

/**
 * Adds a picture to a person's profile.
 *
 * This function is responsible for uploading a picture and associating it with a specific person.
 * It creates a FormData object, appends the picture file, and sends a POST request to the specified endpoint.
 * The function returns true if the picture is successfully added, otherwise, it throws an error.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPictureRegister} picture - The picture object containing the file and associated person and media IDs.
 * @returns {Promise<boolean>} A promise that resolves to true if the picture is successfully added.
 * @throws {PersonErr.ADD_PICTURE_FAILED} Throws a specific error if the picture addition fails.
 */
export const addPersonPicture = async (
  fetcher: Fetcher,
  picture: IPictureRegister,
) => {
  try {
    const form = new FormData();
    form.append('upload', picture.file);
    const response = await fetcher.post<IPictureRegister>(
      StringUtils.bindContext(endpoints.ADD_PERSON_PICTURE, {
        userId: picture.person,
        mediaId: picture.mediaId,
      }),
      form,
    );
    if (response.status !== 201) {
      throw errorFactory.create(PersonErr.ADD_PICTURE_FAILED);
    }

    return true;
  } catch (error) {
    throw errorFactory.create(PersonErr.ADD_PICTURE_FAILED);
  }
};
