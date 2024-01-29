import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateGalleryInputDto, IGallery } from '../types';

/**
 * Creates a gallery using the provided fetcher and gallery input data.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make the API call.
 * @param {ICreateGalleryInputDto} gallery - The input data for creating the gallery.
 * @return {Promise<IGallery>} A promise that resolves to the created gallery.
 */
export const createGallery = async (
  fetcher: Fetcher,
  gallery: ICreateGalleryInputDto,
): Promise<IGallery> => {
  try {
    const response = await fetcher.post<IGallery>(endpoints.GALLERY, gallery);
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(GalleryErr.CREATE_GALLERY_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(GalleryErr.CREATE_GALLERY_FAILED),
        );
    }
  }
};
