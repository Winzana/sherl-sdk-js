import { SherlClient } from '../common';
import { MediaProvider } from './provider';
import {
  ICaption,
  IMedia,
  IMediaQuery,
  IThumbnail,
  IFile,
  IUploadData,
} from './types';

const media = (client: SherlClient) => new MediaProvider(client);
export { media, ICaption, IMedia, IMediaQuery, IThumbnail, IFile, IUploadData };
