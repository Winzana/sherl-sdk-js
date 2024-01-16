import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';

/**
 * Delete a media file by its unique identifier (ID).
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier (ID) of the media file to delete.
 * @returns {Promise<string>} A promise that resolves to the ID of the deleted media file.
 */
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
