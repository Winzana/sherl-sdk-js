import { SherlClient } from '../common';
import { MediaProvider } from './provider';
import {
  IMediaQuery,
  IUploadData,
  IImageObject,
  IMediaObject,
  TypeEnum,
} from './types';

const media = (client: SherlClient) => new MediaProvider(client);
export {
  media,
  IImageObject,
  IMediaObject,
  IMediaQuery,
  TypeEnum,
  IUploadData,
};
