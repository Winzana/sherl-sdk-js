import { ErrorFactory } from '../common/errors';

export enum MediaErr {
  UPLOAD_FILE_FAILED = 'media/upload-file-failed',
  GET_FILE_FAILED = 'media/get-file-failed',
  DELETE_FILE_FAILED = 'media/delete-file-failed',
}

export const errors = {
  [MediaErr.UPLOAD_FILE_FAILED]: 'Failed to upload file',
  [MediaErr.GET_FILE_FAILED]: 'Failed to get file',
  [MediaErr.DELETE_FILE_FAILED]: 'Failed to delete file',
};

export const errorFactory = new ErrorFactory<MediaErr>('Media', errors);
