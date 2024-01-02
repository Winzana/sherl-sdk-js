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
  /**
   * Creates a gallery using the provided fetcher and gallery input data.
   *
   * @param {ICreateGalleryInputDto} gallery - The input data for creating the gallery.
   * @return {Promise<IGallery>} A promise that resolves to the created gallery.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/gallery#create-gallery Sherl SDK documentation} for further information.
   */
  createGallery = this.withFetcher(createGallery);

  /**
   * Deletes a gallery.
   *
   * @param {string} galleryId - the ID of the gallery to be deleted
   * @return {Promise<IGallery>} a promise that resolves to the deleted gallery
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/gallery#delete-gallery Sherl SDK documentation} for further information.
   */
  deleteGallery = this.withFetcher(deleteGallery);

  /**
   * Retrieves galleries based on the provided filters.
   *
   * @param {IGetGalleriesFilters} filters - Optional filters to apply to the request.
   * @return {Promise<Pagination<IGallery>>} A promise that resolves to the paginated list of galleries.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/gallery#get-all-galleries Sherl SDK documentation} for further information.
   */
  getGalleries = this.withFetcher(getGalleries);

  /**
   * Registers a dynamic background using the provided fetcher and dynamicBackground input.
   *
   * @param {Fetcher} fetcher - The fetcher used to make the HTTP request.
   * @param {ICreateDynamicBackgroundInputDto} dynamicBackground - The input data for creating a dynamic background.
   * @return {Promise<IDynamicBackground>} - A promise that resolves to the created dynamic background.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/gallery#register-dynamic-background Sherl SDK documentation} for further information.
   */
  registerDynamicBackground = this.withFetcher(registerDynamicBackground);

  /**
   * Updates a dynamic background.
   *
   * @param {string} dynamicBackgroundId - The ID of the dynamic background to update.
   * @param {Partial<ICreateDynamicBackgroundInputDto>} dynamicBackground - The partial dynamic background object with the updated values.
   * @return {Promise<IDynamicBackground>} The updated dynamic background.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/gallery#update-dynamic-background Sherl SDK documentation} for further information.
   */
  updateDynamicBackground = this.withFetcher(updateDynamicBackground);

  /**
   * Deletes a dynamic background.
   *
   * @param {string} dynamicBackgroundId - The ID of the dynamic background to delete.
   * @return {Promise<IDynamicBackground>} A Promise that resolves to the deleted dynamic background.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/gallery#delete-dynamic-background Sherl SDK documentation} for further information.
   */
  deleteDynamicBackground = this.withFetcher(deleteDynamicBackground);

  /**
   * Retrieves dynamic backgrounds based on specified filters.
   *
   * @param {IGetDynamicBackgroundFilters} [filters] - Optional filters to apply to the backgrounds.
   * @return {Promise<Pagination<IDynamicBackground>>} A promise that resolves to a pagination object containing the dynamic backgrounds.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/gallery#get-dynamic-backgrounds-list Sherl SDK documentation} for further information.
   */
  getDynamicBackgrounds = this.withFetcher(getDynamicBackgrounds);
}

export { GalleryProvider };
