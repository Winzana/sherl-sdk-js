import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPictureRegister } from '../types';
import { StringUtils } from '../../common/utils/string';
import { filterSherlError } from '../../common/utils/error';

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

    switch (response.status) {
      case 201:
        return true;
      case 403:
        throw errorFactory.create(PersonErr.ADD_PICTURE_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.ADD_PICTURE_NOT_FOUND);
      case 409:
        throw errorFactory.create(PersonErr.ADD_PICTURE_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.ADD_PICTURE_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.ADD_PICTURE_FAILED),
    );
    throw filteredError;
  }
};
