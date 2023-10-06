import { SherlClient } from '../common';
import { GalleryProvider } from './provider';

export const gallery = (client: SherlClient) => new GalleryProvider(client);
export * as GalleryTypes from './types';
