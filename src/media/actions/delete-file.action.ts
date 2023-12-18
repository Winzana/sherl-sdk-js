import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';

export const deleteFile = async (
  fetcher: Fetcher,
  id: string,
): Promise<string> => {
  try {
    const response = await fetcher.delete<string>(
      StringUtils.bindContext(endpoints.MANAGE_FILE, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(MediaErr.DELETE_FILE_FORBIDDEN);
      case 404:
        throw errorFactory.create(MediaErr.MEDIA_NOT_FOUND);
      default:
        throw errorFactory.create(MediaErr.DELETE_FILE_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(MediaErr.DELETE_FILE_FAILED));
  }
};
