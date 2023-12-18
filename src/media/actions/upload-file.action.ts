import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils/errors';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';
import { IImageObject, IMediaQuery } from '../types';

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
