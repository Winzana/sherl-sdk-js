import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';
import { IImageObject, IMediaQuery } from '../types';

export const uploadFile = async (
  fetcher: Fetcher,
  data: FormData,
  query: IMediaQuery,
): Promise<IImageObject> => {
  const response = await fetcher
    .post<IImageObject>(endpoints.UPLOAD_FILE, data, query, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch((_err) => {
      throw errorFactory.create(MediaErr.UPLOAD_FILE_FAILED);
    });

  if (response.status !== 201) {
    throw errorFactory.create(MediaErr.UPLOAD_FILE_FAILED);
  }
  return response.data;
};
