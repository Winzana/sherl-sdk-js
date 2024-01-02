import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';
import { IImageObject, IMediaQuery } from '../types';

/**
 * Upload a media file with specified data and query parameters.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {FormData} data - The FormData object containing the media file to upload.
 * @param {IMediaQuery} query - Query parameters used to specify the media file details.
 * @returns {Promise<IImageObject>} A promise that resolves to the uploaded media file as an IImageObject.
 */
export const uploadFile = async (
  fetcher: Fetcher,
  data: FormData,
  query: IMediaQuery,
): Promise<IImageObject> => {
  try {
    const response = await fetcher.post<IImageObject>(
      endpoints.UPLOAD_FILE,
      data,
      query,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(MediaErr.UPLOAD_FILE_FORBIDDEN);
      default:
        throw errorFactory.create(MediaErr.GET_FILE_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(MediaErr.UPLOAD_FILE_FAILED));
  }
};
