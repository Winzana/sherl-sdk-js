import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { deleteFile, getFile, uploadFile } from './actions';
import { errorFactory } from './errors';

class MediaProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Upload a media file with specified data and query parameters.
   *
   * @param {FormData} data - The FormData object containing the media file to upload.
   * @param {IMediaQuery} query - Query parameters used to specify the media file details.
   * @returns {Promise<IImageObject>} A promise that resolves to the uploaded media file as an IImageObject.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/media#upload-file Sherl SDK documentation} for further information
   */
  public uploadFile = this.withFetcher(uploadFile);

  /**
   * Get a media file by its query parameters.
   *
   * @param {IMediaQuery} query - Query parameters used to specify the media file to retrieve.
   * @returns {Promise<IImageObject>} A promise that resolves to the retrieved media file as an IImageObject.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/media#get-file-by-id Sherl SDK documentation} for further information
   */
  public getFile = this.withFetcher(getFile);
  /**
   * Delete a media file by its unique identifier (ID).
   *
   * @param {string} id - The unique identifier (ID) of the media file to delete.
   * @returns {Promise<string>} A promise that resolves to the ID of the deleted media file.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/media#delete-file Sherl SDK documentation} for further information
   */
  public deleteFile = this.withFetcher(deleteFile);
}

export { MediaProvider };
