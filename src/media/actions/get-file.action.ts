import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';
import { IImageObject, IMediaQuery } from '../types';

/**
 * Get a media file by its query parameters.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IMediaQuery} query - Query parameters used to specify the media file to retrieve.
 * @returns {Promise<IImageObject>} A promise that resolves to the retrieved media file as an IImageObject.
 */
export const getFile = async (
  fetcher: Fetcher,
  query: IMediaQuery,
): Promise<IImageObject> => {
  const id = query.id;

  try {
    const response = await fetcher.get<IImageObject>(
      StringUtils.bindContext(endpoints.MANAGE_FILE, { id }),
      query,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(MediaErr.GET_FILE_FORBIDDEN);
      case 404:
        throw errorFactory.create(MediaErr.MEDIA_NOT_FOUND);
      default:
        throw errorFactory.create(MediaErr.GET_FILE_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(MediaErr.GET_FILE_FAILED));
  }
};
