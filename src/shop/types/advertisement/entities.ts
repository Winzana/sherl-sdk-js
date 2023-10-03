import { PaginationFilters } from '../../../common';
import { IImageObject } from '../../../media';

export interface IFindAdvertisementInputDto extends PaginationFilters {
  displayDeleted?: boolean;
  displayZones?: string[];
  shuffle?: boolean;
  q?: string;
  displayAllVersion?: boolean;
  panel?: string;
  uriOfPanels?: string[];
  sortBy?: string;
  sortOrder?: string;
}

export interface ICreateAdvertisementInputDto {
  description: string;
  displayZones: DisplayZoneEnum[];
  backgroundImage?: IImageObject;
  name: string;
  redirectUrl: string;
  translations?: IAdvertisementTranslation[];
  metadatas?: any;
}

export interface IAdvertisementTranslation {
  lang: string;
  name?: string;
  description?: string;
}

export enum DisplayZoneEnum {
  HOME_PAGE = 'HOME_PAGE',
  MENU = 'MENU',
  EVENTS_LIST = 'EVENTS_LIST',
  MAP_LIST = 'MAP_LIST',
  LAUNCHSCREEN = 'LAUNCHSCREEN',
  ACTIVITY_FORM = 'ACTIVITY_FORM',
}

export interface IAvertisement {
  id: string;
  uri: string;
  name: string;
  description: string;
  displayZones: DisplayZoneEnum[];
  numberOfDisplay: number;
  deleted: boolean;
  redirectUrl: string;
  backgroundImage: IImageObject;
  translations: IAdvertisementTranslation[];
  version: number;
  parentUri?: string;
  updatedAt?: Date;
  createdAt?: Date;
  versionCreatedAt?: Date;
  updatedBy?: string;
  createdBy?: string;
  versionCreatedBy?: string;
  metadatas?: any;
}
