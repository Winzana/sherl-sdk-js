import { PaginationFilters } from '../common';
import { IImageObject } from '../media';
import { IAddress } from '../place';
import { DisplayZoneEnum, ICategoryResponse } from '../shop/types';

export interface ICreateGalleryInputDto {
  categoryUri: string;
  media: IImageObject;
}

export interface IGallery {
  id: string;
  uri: string;
  consumerId: string;
  categoryUri: string;
  category?: ICategoryResponse;
  media: IImageObject;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGetGalleriesFilters extends PaginationFilters {
  id?: string;
  uri?: string;
}

export interface ICreateDynamicBackgroundInputDto {
  medias: IImageObject[];
  metadatas?: { [key: string]: any };
  displayZones: DisplayZoneEnum[];
  locations?: IPoiZone[];
}

export interface IPoiZone {
  distance?: string;
  location?: IAddress;
}

export interface IGeoShape {
  type: string;
  coordinates: number[];
  radius: string;
}

export interface IGetDynamicBackgroundFilters extends PaginationFilters {
  uri?: string;
  id?: string;
  country?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  streetAddress?: string;
  createdAt?: string;
  departement?: string;
  complementaryStreetAddress?: string;
  name?: string;
  originId?: string;
  latitude?: number;
  longitude?: number;
  displayDeleted?: boolean;
  displayZones?: string[];
}

export interface IDynamicBackground {
  id: string;
  uri: string;
  medias: IImageObject[];
  metadatas: { [key: string]: any };
  createdAt: Date;
  versionCreatedAt: Date;
  updatedAt: Date;
  deleted: boolean;
  displayZones: DisplayZoneEnum[];
  locations: IPoiZone[];
  geoshapes?: IGeoShape[];
  version: number;
  parentUri?: string;
  updatedBy?: string;
  createdBy?: string;
  versionCreatedBy?: string;
}
