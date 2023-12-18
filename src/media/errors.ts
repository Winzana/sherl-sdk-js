import { ErrorFactory } from '../common/errors';

export enum MediaErr {
  MEDIA_NOT_FOUND = 'media/media-not-found',
  UPLOAD_FILE_FAILED = 'media/upload-file-failed',
  UPLOAD_FILE_FORBIDDEN = 'media/upload-file-failed-forbidden',
  GET_FILE_FAILED = 'media/get-file-failed',
  GET_FILE_FORBIDDEN = 'media/get-file-failed-forbidden',
  DELETE_FILE_FAILED = 'media/delete-file-failed',
  DELETE_FILE_FORBIDDEN = 'media/delete-file-failed-forbidden',
}

export const errors = {
  [MediaErr.MEDIA_NOT_FOUND]: 'Error on media action, not found',
  [MediaErr.UPLOAD_FILE_FAILED]: 'Failed to upload file',
  [MediaErr.UPLOAD_FILE_FORBIDDEN]: 'Failed to upload file, forbidden',
  [MediaErr.GET_FILE_FAILED]: 'Failed to get file',
  [MediaErr.GET_FILE_FORBIDDEN]: 'Failed to get file, forbidden',
  [MediaErr.DELETE_FILE_FAILED]: 'Failed to delete file',
  [MediaErr.DELETE_FILE_FORBIDDEN]: 'Failed to delete file, forbidden',
};

export const errorFactory = new ErrorFactory<MediaErr>('Media', errors);
