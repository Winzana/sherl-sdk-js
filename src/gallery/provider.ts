import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  createGallery,
  deleteDynamicBackground,
  deleteGallery,
  getDynamicBackgrounds,
  getGalleries,
  registerDynamicBackground,
  updateDynamicBackground,
} from './actions';
import { errorFactory } from './errors';

class GalleryProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  createGallery = this.withFetcher(createGallery);
  deleteGallery = this.withFetcher(deleteGallery);
  getGalleries = this.withFetcher(getGalleries);
  registerDynamicBackground = this.withFetcher(registerDynamicBackground);
  updateDynamicBackground = this.withFetcher(updateDynamicBackground);
  deleteDynamicBackground = this.withFetcher(deleteDynamicBackground);
  getDynamicBackgrounds = this.withFetcher(getDynamicBackgrounds);
}

export { GalleryProvider };
