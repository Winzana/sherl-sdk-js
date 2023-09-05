import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { MediaErr, errorFactory } from '../errors';
import { IMedia, IMediaQuery } from '../types';

export const uploadFile = async (
  fetcher: Fetcher,
  data: any,
  query: IMediaQuery,
): Promise<IMedia> => {
  try {
    const response = await fetcher
      .post<IMedia>(endpoints.UPLOAD_FILE, data, query, {
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
  } catch (error) {
    throw errorFactory.create(MediaErr.UPLOAD_FILE_FAILED);
  }
};
