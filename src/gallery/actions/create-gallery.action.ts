import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateGalleryInputDto, IGallery } from '../types';

export const createGallery = async (
  fetcher: Fetcher,
  gallery: ICreateGalleryInputDto,
): Promise<IGallery> => {
  try {
    const response = await fetcher.post<IGallery>(endpoints.GALLERY, gallery);
    return response.data;
  } catch (err) {
    throw errorFactory.create(GalleryErr.CREATION_FAILED);
  }
};
