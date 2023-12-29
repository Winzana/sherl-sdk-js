import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPictureRegister } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

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
      default:
        throw errorFactory.create(PersonErr.ADD_PICTURE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.ADD_PICTURE_FAILED),
    );
  }
};
